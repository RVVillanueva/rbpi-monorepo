import { redirect } from "react-router"

export const loader = async () => {

  throw redirect('/app')

  return {}
}

export default function IndexPage() {

  return (
    <div>
      
    </div>
  )
}
