import { useLegacyRpcClient } from "@/context/RBPIClientRPCProvider";
import { AuthCurrency } from "@components/currency";
import { 
  AvatarGroup, 
  Avatar, 
  AvatarFallback, 
  AvatarImage,
} from "@shadcn/base/components/ui/avatar";
import { Button } from "@shadcn/base/components/ui/button";
import { Checkbox } from "@shadcn/base/components/ui/checkbox";
import { Skeleton } from "@shadcn/base/components/ui/skeleton";
import { EllipsisVerticalIcon } from "@shadcn/base/icons";
import { useQuery } from "@tanstack/react-query";
import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import { Link, useSearchParams } from "react-router";
import { useUserStrings } from "~/values/strings/user";

export const useJournalsTableColumns = () => {
  const userStrings = useUserStrings()
  
  const columns: ColumnDef<RBPICore.Legacy.AccountingJournalHeaderView>[] = [
    {
      id: "je-checkBoxes",
      size: 50,
      header: () => {
        return (
          <div className='px-1.5'>
            <Checkbox />
          </div>
        )
      },

      cell: () => {

        return (
          <div className='px-1.5'>
            <Checkbox />
          </div>
        )
      },
    },
    {
      id: "je-date",
      header: userStrings.journalsTableStrings.dateHeader,
      cell: args => {
        const { row } = args
        return (
          <div>
            { format(row.original.journalDate, 'MMM-dd') }
          </div>
        )
      },
      size: 50,
    },
    {
      id: "je-journalId",
      header: userStrings.journalsTableStrings.journalIdHeader,
      cell: args => {
        const { row } = args
        const userStrings = useUserStrings()
        const [search] = useSearchParams()

        const journalId = row.original.journalId

        return (
          <div>
            <Button
              size={'xs'}
              variant={'link'}
              className='p-0 h-full'
              asChild>
              <Link to={userStrings.journalsTableStrings.viewJournalDetailsLinkHref(journalId)} preventScrollReset>
                JE-{ row.original.journalId }
              </Link>
            </Button>
          </div>
        )
      },
      size: 50,
    },
    {
      id: "je-description",
      header: userStrings.journalsTableStrings.descriptionHeader,
      cell: args => {
        const { row } = args
        const desc = row.original.journalDescription
          .replace(/^\d{2}\/\d{2}\/\d{4}\s*(\([^)]+\)\s*)?/, '') // remove any prefix dates

        return (
          <div className='max-w-[45ch] text-wrap'>
            <span className='text-ellipsis'>
              { desc }
            </span>
          </div>
        )
      },
      size: 250,
    },
    {
      id: "je-totalAmount",
      header: userStrings.journalsTableStrings.totalAmountHeader,
      size: 150,
      cell: args => {
        const { row } = args
        
        return (
          <div className=''>
            <AuthCurrency amount={row.original.totalAmount} />
          </div> 
        )
      },
    },
    {
      id: "je-branches",
      header: userStrings.journalsTableStrings.branchesHeader,
    },
    {
      id: "je-authors",
      header: userStrings.journalsTableStrings.authorHeader,
      size: 80,
      cell: args => {
        const { row } = args
        const client = useLegacyRpcClient()
        
        const { data: authors, isPending } = useQuery({
          queryKey: [`authors_${row.id}_k`],
          queryFn: async () => {
            const res = await client.rbpi.ledger.journals[":journalId"].authors.$get({
              param: { journalId: row.original.journalId.toString() },
              query: {},
            })

            if (res.ok) {
              return await res.json()
            }
          },
        })

        if (isPending) {
          return (
            <div>
              <Skeleton className='w-8 h-8 bg-zinc-200 rounded-full' />
            </div>
          )
        }

        if (!authors?.data.length) {
          return (
            <div>
              <Avatar>
                <AvatarFallback>?</AvatarFallback>
              </Avatar>
            </div>
          )
        }

        if (authors.data.length > 1) {
          return (
            <div>
              <AvatarGroup>
                { authors.data.map(author => (
                  <Avatar title={author.makerFullName} key={author.makerId}>
                    <AvatarImage src={author.makerAvatar} />
                    <AvatarFallback>{ author.makerFullName.at(0) }</AvatarFallback>
                  </Avatar>
                )) }
              </AvatarGroup>
            </div>
          )
        }

        return (
          <div>
            { authors.data.map(author => (
              <Avatar title={author.makerFullName} key={author.makerId}>
                <AvatarImage src={author.makerAvatar} />
                <AvatarFallback>{ author.makerFullName.at(0) }</AvatarFallback>
              </Avatar>
            )) }
          </div>
        )
      }
    },
    {
      id: "je-action",
      header: userStrings.actionTableHeaderString,
      size: 50,
      cell: args => {
        const { row } = args

        return (
          <div className=''>
            <Button
              size={'icon-xs'}
              variant={'ghost'}>
              <EllipsisVerticalIcon />
            </Button>
          </div>
        )
      },
    },
  ]

  return columns
}

