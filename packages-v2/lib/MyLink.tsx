import Link from 'next/link';
import { useRouter } from 'next/router';

export function MyLink(props: any) {
  const router = useRouter();
  router?.isFallback;

  return <Link {...props} />;
}
