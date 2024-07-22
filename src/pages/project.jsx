import Navber from "@/Components/Navber";
import Nav from "@/Components/Navber";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";
const project = () => {
  return (
    <>
      <Navber />
      <div className=" sm:h-screen md:h-screen lg:h-screen bg-sky-100">
        <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 space-x-3 gap-4 place-items-center pt-12 ">
          <Card>
            <CardBody className="overflow-visible p-0">
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                className="w-[390px] object-fill h-[340px]"
                src="ss formvalidation.jpg"
              />
            </CardBody>
            <CardFooter className=" justify-center cursor-pointer text-xl flex flex-col">
              <p>A form validation project</p>
              <a href="https://form-validation-one-phi.vercel.app/">
                <button className="bg-blue-400 hover:bg-blue-600 rounded-lg p-2 mt-3">
                  click to view
                </button>
              </a>
            </CardFooter>
          </Card>
          <Card>
            <CardBody className="overflow-visible p-0">
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                className="w-[390px] object-fill h-[340px]"
                src="ss shopingcart.jpg"
              />
            </CardBody>
            <CardFooter className=" justify-center cursor-pointer text-xl flex flex-col">
              <p>A responsive website project</p>
              <a href="https://shopping-cart-delta-sand.vercel.app/">
                <button className="bg-blue-400 hover:bg-blue-600 rounded-lg p-2 mt-3">
                  click to view
                </button>
              </a>
            </CardFooter>
          </Card>
          <Card>
            <CardBody className="overflow-visible p-0 ">
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                className="w-[390px] object-fill h-[340px]"
                src="ss darkmode.jpg"
              />
            </CardBody>
            <CardFooter className=" justify-center cursor-pointer text-xl flex flex-col">
              <p>A template with active darkmode project</p>

              <a href="https://darkmood-using-nextjs-ioo2.vercel.app/">
                <button className="bg-blue-400 hover:bg-blue-600 rounded-lg p-2 mt-3">
                  click to view
                </button>
              </a>
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  );
};

export default project;
