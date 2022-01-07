import Link, { LinkProps } from "next/link"
import { useRouter } from "next/router";
import { cloneElement, ReactElement } from "react"

interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
  matchExactHref?: boolean;
}

const ActiveLink = ({ 
  children, 
  matchExactHref = false, 
  ...rest 
}: ActiveLinkProps) => {
  const { asPath } = useRouter(); // Recupera rota da URL

  let isActive = false;

  // Compara a prop href do link com a rota da URL
  if (matchExactHref && (asPath === rest.href || asPath === rest.as)) {
    isActive = true;
  }

  if (!matchExactHref && (
    asPath.startsWith(String(rest.href)) ||
    asPath.startsWith(String(rest.as))
  )) {
    isActive = true;
  }

  return (
    <Link {...rest}>
      {
        cloneElement(children, {
          color: isActive ? "pink.400" : "gray.50"
        })
      }
    </Link>
  )
}

export default ActiveLink