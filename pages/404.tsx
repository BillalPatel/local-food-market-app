// const Error404Page = () => {
//   return (
//     <div className="mx-4 bg-black">
//       <h1>40r4</h1>
//     </div>
//   );
// };

// export default Error404Page;

// import Layout from '@/components/Layout';

const MainContent = () => {
  return (
    <>
      <p>That page has gone missing.</p>
    </>
  );
};

/** Render data
 * ---------------------------------
 */
const Error404Page = () => {
  return (
    <>
      <title>404</title>

      {/* pageTitle="404"
                contentComponent={<><MainContent /></>} */}
    </>
  );
};

export default Error404Page;
