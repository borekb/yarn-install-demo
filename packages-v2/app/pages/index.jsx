import { MyLink } from '@ship-demo/lib/MyLink';

function HomePage() {
  return (
    <>
      <h1>App 1</h1>
      <p>
        <MyLink href='https://www.example.com'>
          <a>This is a `MyLink` component from `lib`</a>
        </MyLink>
      </p>
    </>
  );
}

export default HomePage;
