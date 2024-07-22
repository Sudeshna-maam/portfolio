import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";

import Navber from "@/components/Navber";

const skills = () => {
  return (
    <>
      <div className="">
        <Navber />
      </div>
      <div className="h-100 bg-purple-50 text-black dark:bg-slate-800 dark:text-white">
        <div className="text-center font-bold text-2xl pt-4 ">
          Experienced with
        </div>

        <div className="box sm:h-auto md:h-auto lg:h-auto rounded-md m-5 p-5 border-medium border-black dark:border-white">
          <div className="flex ">
            <Card className="w-52 m-5 p-5 bg-slate-200 border-medium border-black dark:border-white rounded-md text-black dark:bg-slate-700 dark:text-white">
              <CardBody className="text-center place-content-center items-center font-bold text-2xl">
                Frontend
              </CardBody>
            </Card>
            <div className="box bg-slate-200  rounded-md sm:h-[576px] md:h-[768px] lg:h-96 w-full m-5 p-5 border-medium border-black dark:border-white grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 place-items-center gap-2  text-black dark:bg-slate-700 dark:text-white">
              <Card className="max-w-24 bg-purple-50 p-4  text-black dark:bg-slate-900 dark:text-white">
                <CardHeader className="">
                  <Image
                    alt="nextui logo"
                    height={40}
                    radius="sm"
                    src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                    width={40}
                  />
                </CardHeader>
                <div className="flex flex-col">
                  <p className="text-md text-center">NextUI</p>
                </div>
              </Card>

              <Card className="max-w-24 bg-purple-50 p-4  text-black dark:bg-slate-900 dark:text-white">
                <CardHeader className="">
                  <Image
                    alt="html logo"
                    height={40}
                    radius="sm"
                    src="html logo.png"
                    width={40}
                  />
                </CardHeader>
                <div className="flex flex-col">
                  <p className="text-md text-center">HTML</p>
                </div>
              </Card>

              <Card className="max-w-24 bg-purple-50 p-4  text-black dark:bg-slate-900 dark:text-white">
                <CardHeader className="">
                  <Image
                    alt="css logo"
                    height={40}
                    radius="sm"
                    src="css logo.png"
                    width={40}
                  />
                </CardHeader>
                <div className="flex flex-col">
                  <p className="text-md text-center">CSS</p>
                </div>
              </Card>

              <Card className="max-w-24 bg-purple-50 p-4  text-black dark:bg-slate-900 dark:text-white">
                <CardHeader className="">
                  <Image
                    alt="js logo"
                    height={40}
                    radius="sm"
                    src="js logo.png"
                    width={40}
                  />
                </CardHeader>
                <div className="flex flex-col">
                  <p className="text-md text-center">JavaScript</p>
                </div>
              </Card>

              <Card className="max-w-24 bg-purple-50 p-4 text-black dark:bg-slate-900 dark:text-white">
                <CardHeader className="">
                  <Image
                    alt="Bootstrap logo"
                    height={40}
                    radius="sm"
                    src="Bootstrap logo.svg"
                    width={40}
                  />
                </CardHeader>
                <div className="flex flex-col">
                  <p className="text-md text-center">Bootstrap</p>
                </div>
              </Card>

              <Card className="max-w-24 bg-purple-50 p-4 text-black dark:bg-slate-900 dark:text-white">
                <CardHeader className="">
                  <Image
                    alt="Nextjs logo"
                    height={40}
                    radius="sm"
                    src="next js logo.jpg"
                    width={40}
                  />
                </CardHeader>
                <div className="flex flex-col">
                  <p className="text-md text-center">Next.js</p>
                </div>
              </Card>

              <Card className="max-w-24 bg-purple-50 p-4 text-black dark:bg-slate-900 dark:text-white">
                <CardHeader className="">
                  <Image
                    alt="nodejs logo"
                    height={40}
                    radius="sm"
                    src="node js logo.svg"
                    width={40}
                  />
                </CardHeader>
                <div className="flex flex-col">
                  <p className="text-md text-center">Node.js</p>
                </div>
              </Card>

              <Card className="max-w-24 bg-purple-50 p-4 text-black dark:bg-slate-900 dark:text-white">
                <CardHeader className="">
                  <Image
                    alt="tailwind logo"
                    height={40}
                    radius="sm"
                    src="tailwind logo.png"
                    width={40}
                  />
                </CardHeader>
                <div className="flex flex-col">
                  <p className="text-md text-center">Tailwind CSS</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* <div className=" grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2  place-items-center  h-[560px] p-28">
          <Card className="max-w-24 bg-purple-50 p-4 ">
            <CardHeader className="">
              <Image
                alt="nextui logo"
                height={40}
                radius="sm"
                src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                width={40}
              />
            </CardHeader>
            <div className="flex flex-col">
              <p className="text-md text-center">NextUI</p>
            </div>
          </Card>

          <Card className="max-w-24 bg-purple-50 p-4">
            <CardHeader className="">
              <Image
                alt="html logo"
                height={40}
                radius="sm"
                src="html logo.png"
                width={40}
              />
            </CardHeader>
            <div className="flex flex-col">
              <p className="text-md text-center">HTML</p>
            </div>
          </Card>

          <Card className="max-w-24 bg-purple-50 p-4">
            <CardHeader className="">
              <Image
                alt="css logo"
                height={40}
                radius="sm"
                src="css logo.png"
                width={40}
              />
            </CardHeader>
            <div className="flex flex-col">
              <p className="text-md text-center">CSS</p>
            </div>
          </Card>

          <Card className="max-w-24 bg-purple-50 p-4">
            <CardHeader className="">
              <Image
                alt="js logo"
                height={40}
                radius="sm"
                src="js logo.png"
                width={40}
              />
            </CardHeader>
            <div className="flex flex-col">
              <p className="text-md text-center">JavaScript</p>
            </div>
          </Card>

          <Card className="max-w-24 bg-purple-50 p-4">
            <CardHeader className="">
              <Image
                alt="Bootstrap logo"
                height={40}
                radius="sm"
                src="Bootstrap logo.svg"
                width={40}
              />
            </CardHeader>
            <div className="flex flex-col">
              <p className="text-md text-center">Bootstrap</p>
            </div>
          </Card>

          <Card className="max-w-24 bg-purple-50 p-4">
            <CardHeader className="">
              <Image
                alt="Nextjs logo"
                height={40}
                radius="sm"
                src="next js logo.jpg"
                width={40}
              />
            </CardHeader>
            <div className="flex flex-col">
              <p className="text-md text-center">Next.js</p>
            </div>
          </Card>

          <Card className="max-w-24 bg-purple-50 p-4">
            <CardHeader className="">
              <Image
                alt="nodejs logo"
                height={40}
                radius="sm"
                src="node js logo.svg"
                width={40}
              />
            </CardHeader>
            <div className="flex flex-col">
              <p className="text-md text-center">Node.js</p>
            </div>
          </Card>

          <Card className="max-w-24 bg-purple-50 p-4">
            <CardHeader className="">
              <Image
                alt="tailwind logo"
                height={40}
                radius="sm"
                src="tailwind logo.png"
                width={40}
              />
            </CardHeader>
            <div className="flex flex-col">
              <p className="text-md text-center">Tailwind CSS</p>
            </div>
          </Card>
        </div> */}
    </>
  );
};

export default skills;
