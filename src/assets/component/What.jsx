import React from "react";
import link from "../img/link.png";
import get from "../img/get hub.png";
import instra from "../img/instra.webp";
import facebook from "../img/facbook.png";
import twitter from "../img/twitter.png";

function What() {
  return (
    <>
      <div className="p-9">
        <h1 className="text-3xl font-bold p-9 font-mono  text-green-800 ">
          What I do?
        </h1>
        <div className="md:inline-flex">
          <div className=" m-3 p-9 shadow-2xl">
            <h1 className="font-bold font-mono">Ui & UX Design</h1>
            <p className="font-mono">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
              consequatur veritatis similique rerum, eligendi blanditiis quam
              natus unde ab quos.
            </p>
          </div>
          <div className=" m-3 p-9 shadow-2xl ">
            <h1 className="font-bold font-mono">Website</h1>
            <p className="font-mono">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
              consequatur veritatis similique rerum, eligendi blanditiis quam
              natus unde ab quos.
            </p>
          </div>
          <div className=" m-3 p-9 shadow-2xl ">
            <h1 className="font-bold font-mono">Mobile Appliction</h1>
            <p className="font-mono">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
              consequatur veritatis similique rerum, eligendi blanditiis quam
              natus unde ab quos.
            </p>
          </div>
        </div>
      </div>

      <div className=" ">
        <h1 className="pl-16 sm:pl-44 py-9 text-3xl font-bold font-mono  text-rose-800 hover:text-green-800">
          Skills
        </h1>
        <div className="flex flex-wrap justify-around font-bold font-mono">
          <h1>HTML 5</h1>
          <h1> CSS 3</h1>
          <h1>Bootstrap</h1>
        </div>
        <div className="flex pl-16 sm:pl-44 py-9 font-bold font-mono">
          <h1>React</h1>
          <h1 className="sm:pl-96 pl-16">Javascript</h1>
        </div>
      </div>

      <hr className="border border-black mx-36" />

      <div className=" font-bold font-mono  sm:pl-44 pl-16 py-9">
        <h>Adobe Xd</h>
        <h className="sm:pl-96 pl-16">Photoshop</h>
      </div>

      <div>
        <h1 className="pl-16 sm:pl-44 py-9 text-3xl font-bold font-mono  text-green-800 hover:text-rose-400 ">
          Experience
        </h1>
        <div>
          <h1 className="pl-16 sm:pl-44 py-6 font-bold font-mono text-3xl  text-rose-800">
            Found-jayrida
          </h1>
          <p className="pl-16 sm:pl-44 py-9 font-bold font-mono">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In laborum
            porro quas nam odio esse, earum et provident perferendis corporis
            delectus neque deserunt quae rerum commodi quasi ullam laudantium
            quisquam tempora voluptates. Odit, beatae? Itaque nam tenetur
            doloremque, voluptas cumque explicabo. Nihil, voluptatum laborum.
            Asperiores inventore, dicta rem quas quibusdam voluptatum provident
            quo blanditiis, unde cum suscipit aliquam reprehenderit a ab, quod
            saepe eius fugiat pariatur quaerat? Vero necessitatibus pariatur
            impedit expedita rem. Enim molestiae assumenda voluptatum magnam.
            Odio mollitia et ad aliquam corporis similique, neque facilis
            voluptas, aliquid, animi quas ut explicabo minus! Cum voluptates
            molestias minus pariatur maxime.
          </p>
        </div>
        <hr className="border border-black mx-36" />
        <div>
          <h1 className="pl-16 sm:pl-44 py-9 text-3xl font-bold font-mono  text-rose-800 ">
            Found-jayrida
          </h1>
          <p className="pl-16 sm:pl-44 py-9 font-bold font-mono">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In laborum
            porro quas nam odio esse, earum et provident perferendis corporis
            delectus neque deserunt quae rerum commodi quasi ullam laudantium
            quisquam tempora voluptates. Odit, beatae? Itaque nam tenetur
            doloremque, voluptas cumque explicabo. Nihil, voluptatum laborum.
            Asperiores inventore, dicta rem quas quibusdam voluptatum provident
            quo blanditiis, unde cum suscipit aliquam reprehenderit a ab, quod
            saepe eius fugiat pariatur quaerat? Vero necessitatibus pariatur
            impedit expedita rem. Enim molestiae assumenda voluptatum magnam.
            Odio mollitia et ad aliquam corporis similique, neque facilis
            voluptas, aliquid, animi quas ut explicabo minus! Cum voluptates
            molestias minus pariatur maxime.
          </p>
        </div>
      </div>

      <div className="sm:flex justify-around items-center">
        <div className="pl-16">
          <h1 className="font-bold font-mono">Just say hi.</h1>
          <p className="font-semibold font-mono ">
            I'm always open to discuss your project and <br />
            talk about new things.
          </p>
          <div className="sm:flex gap-9 items-center pt-9 text-center">
            <div>
              <p className="font-semibold font-mono">Mail me at</p>
              <p className="font-semibold font-mono">eren@jayrida.com</p>
            </div>
            <div>
              <p className="font-bold font-mono">Follow me</p>
              <div className="flex items-center  gap-2 justify-center pt-9">
                <img src={link} alt="" className="h-5 " />
                <img src={get} alt="" className="h-9  " />
                <img src={instra} alt="" className="h-5  " />
                <img src={facebook} alt="" className="h-5 " />
                <img src={twitter} alt="" className="h-5 " />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800">
            <div className="mb-8 text-center">
              <h1 className="my-3 text-4xl font-bold">Sign in</h1>
              <p className="text-sm dark:text-gray-600">
                Sign in to access your account
              </p>
            </div>
            <form noValidate="" action="" className="space-y-12">
              <div className="space-y-4">
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="leroy@jenkins.com"
                    className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                  />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <label htmlFor="password" className="text-sm">
                      Password
                    </label>
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="text-xs hover:underline dark:text-gray-600"
                    >
                      Forgot password?
                    </a>
                  </div>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="*****"
                    className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <div>
                  <button
                    type="button"
                    className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50"
                  >
                    Sign in
                  </button>
                </div>
                <p className="px-6 text-sm text-center dark:text-gray-600">
                  Don't have an account yet?
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="hover:underline dark:text-violet-600"
                  >
                    Sign up
                  </a>
                  .
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default What;
