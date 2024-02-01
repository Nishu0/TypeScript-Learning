import { ReactNode } from "react"

type SectionProps={
    title?:string,
    children: ReactNode
}

//Provide Default value in props destructuring
const Section = ({title="My Subheading",children}:SectionProps) => {
  return (
    <>
    <h2>{title}</h2>
    <p>{children}</p>

    </>
  )
}

export default Section