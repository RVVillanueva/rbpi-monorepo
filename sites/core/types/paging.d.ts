
declare module RBPICore {

  declare namespace PagingTypes {

    interface PageParams {
      page: number
      pageSize: number
    }

    interface CursorParams {
      column?: string
      cursor?: string
      pageSize: number
    }

    type PagingParams = PageParams | CursorParams
    

    interface PaginateResponse<T> {
      data: T[]
      total: number
      page: number
      pageSize: number
      nextPage: number
    }

    interface CursorPaginatedResponse<T> extends PaginateResponse<T> {
      nextCursor: string | null
    }
  }

}

