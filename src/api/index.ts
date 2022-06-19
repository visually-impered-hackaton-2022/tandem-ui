/* eslint-disable @typescript-eslint/no-explicit-any */
import { HTTP_VERBS } from "@/types/Common";
import { json } from "stream/consumers";

export default function newRequest(
  method: HTTP_VERBS,
  url: string,
  headers: Headers,
  queryParams: any,
  data: any
): Promise<any> {
  const init = {
    method: method,
    headers: headers,
    body: data,
  };
  if (method === HTTP_VERBS.GET || method === HTTP_VERBS.PATCH) {
    delete init.body;
  }
  const responseData = fetch(
    url,
    init
    //  params: queryParams,
  ).then((response: Response) => {
    //console.log("headers: " + JSON.stringify(headers) );
    if (response.status === 200 || response.status === 201){
        if (headers.get("Content-Type") === "application/json") {
              return response.json();
            } else {
              return response.text().then(function (text) {
                return text;
              });
            }
    }
    //just return plain response object
    // for example if status 401 etc.
    return response;
  });
  return responseData;
 
}

// export const loadPosts = () => {
//     const PostLoader = (props: { url: string; children: ReactNode }) => {
//         const loader = async () => {
//             const wait = (ms: number, value: Post) =>
//                 new Promise((resolve) => setTimeout(resolve, ms, value));
//             return await fetch(props.url)
//                 .then((res) => res.json())
//                 .then((value) => wait(3000, value));
//         };
//         return <DataLoader loader={loader}>{props.children}</DataLoader>;
//     };
