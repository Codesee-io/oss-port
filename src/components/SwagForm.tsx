import React from "react";

interface Props {
  onSubmitSuccessful: () => void;
}

export function SwagForm({ onSubmitSuccessful }: Props) {
  const urlFormEncoded = (obj) => {
    var str = [];
    for (var p in obj)
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    return str.join("&");
  };

  const submitFunction = async (event) => {
    event.preventDefault(); // this prevents the Form from submitting to server

    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email-address") as HTMLInputElement)
      .value;
    const gitHub = (document.getElementById("github") as HTMLInputElement)
      .value;
    const address = (document.getElementById("address") as HTMLInputElement)
      .value;
    const tShirt = (document.getElementById("t-shirt") as HTMLSelectElement)
      .value;
    const sweatShirt = (
      document.getElementById("sweatshirt") as HTMLSelectElement
    ).value;
    const contributor = (
      document.getElementById("contributor") as HTMLInputElement
    ).checked;
    const maintainer = (
      document.getElementById("maintainer") as HTMLInputElement
    ).checked;

    const requestFormBody = {
      "entry.1000020": name,
      "entry.1000025": email,
      "entry.2021505370": gitHub,
      "entry.960674675": address,
      "entry.967112212": tShirt,
      "entry.1493121754": sweatShirt,
    };

    if (maintainer) {
      requestFormBody["entry.1836468723"] = "I'm a maintainer";
    }
    if (contributor) {
      requestFormBody["entry.1050494925"] = "I'm a contributor";
    }

    await submitForm(requestFormBody);
  };

  const submitForm = async (requestFormBody) => {
    try {
      await fetch(
        "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdFUAQA787V8fGfwsR7Rs_NT2LlsyRfU3vIsIdBGQowH6VIJA/formResponse",
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded ",
          },
          method: "POST",
          mode: "no-cors",
          body: urlFormEncoded(requestFormBody),
        }
      )
        .then((response) => {
          onSubmitSuccessful();
        })
        .catch((error) => {
          console.error(
            "Oops! Something went wrong submitting your swag form. Please try again! And if that doesn't work, please let us know at support@codesee.io"
          );
        });
    } catch (err) {
      console.error("err:", err);
    }
  };

  return (
    <form action="#" method="POST">
      <div className="grid grid-cols-2 gap-6">
        <div className="col-span-2">
          <label htmlFor="name" className="block text-sm text-white">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            autoComplete="given-name"
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300"
          />
        </div>

        <div className="col-span-2">
          <label htmlFor="email-address" className="block text-sm text-white">
            Email address
          </label>
          <input
            type="text"
            name="email-address"
            id="email-address"
            autoComplete="email"
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300"
          />
        </div>
        <div className="col-span-2">
          <label htmlFor="github" className="block text-sm text-white">
            GitHub username
          </label>
          <input
            type="text"
            name="github"
            id="github"
            autoComplete="Github"
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300"
          />
        </div>

        <div className="col-span-2">
          <label htmlFor="country" className="block text-sm text-white">
            Complete mailing address
          </label>
          <textarea
            id="address"
            name="address"
            autoComplete="address"
            rows={4}
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          ></textarea>
        </div>
        <div className="col-span-6 sm:col-span-3">
          <label
            htmlFor="t-shirt"
            className="block text-sm font-medium text-white"
          >
            T-shirt size
          </label>
          <select
            id="t-shirt"
            name="t-shirt"
            autoComplete="t-shirt"
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
          </select>
        </div>
        <div className="col-span-6 sm:col-span-3">
          <label
            htmlFor="sweatshirt"
            className="block text-sm font-medium text-white"
          >
            Sweatshirt size
          </label>
          <select
            id="sweatshirt"
            name="sweatshirt"
            autoComplete="sweatshirt"
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
          </select>
        </div>
        <div className="col-span-1 flex items-center h-5">
          <input
            id="contributor"
            name="contributor"
            type="checkbox"
            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
          />
          <label
            htmlFor="contributor"
            className="font-medium text-white ml-3 text-sm"
          >
            I'm a contributor
          </label>
        </div>

        <div className="col-span-1 flex items-center h-5">
          <input
            id="maintainer"
            name="maintainer"
            type="checkbox"
            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
          />
          <label
            htmlFor="maintainer"
            className="font-medium text-white ml-3 text-sm"
          >
            I'm a maintainer
          </label>
        </div>
      </div>

      <div className="px-4 py-3 text-right sm:px-6 sm:py-10">
        <button
          type="submit"
          onClick={submitFunction}
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-black-500 bg-yellow-200 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Claim your swag
        </button>
      </div>
    </form>
  );
}
