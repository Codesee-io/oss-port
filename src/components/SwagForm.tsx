import React, { FunctionComponent, useState } from "react";
import Button from "./Button";

const SwagForm: FunctionComponent = () => {
  const [signedUp, setSignedUp] = useState(false);

  function onSubmitSuccessful() {
    setSignedUp(true);
  }

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
        "https://docs.google.com/forms/d/e/1FAIpQLSdFUAQA787V8fGfwsR7Rs_NT2LlsyRfU3vIsIdBGQowH6VIJA/formResponse",
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
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

  if (signedUp) {
    return (
      <div className="text-xl font-medium leading-6 text-white">
        Niiiice, it worked!
      </div>
    );
  }

  return (
    <form action="#" method="POST">
      <div className="space-y-6 w-96 max-w-full">
        <div>
          <label htmlFor="name" className="block text-sm text-white mb-1">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            autoComplete="given-name"
            className="input"
          />
        </div>

        <div>
          <label
            htmlFor="email-address"
            className="block text-sm text-white mb-1"
          >
            Email address
          </label>
          <input
            type="email"
            name="email-address"
            id="email-address"
            autoComplete="email"
            className="input"
          />
        </div>

        <div>
          <label htmlFor="github" className="block text-sm text-white mb-1">
            GitHub username
          </label>
          <input
            type="text"
            name="github"
            id="github"
            autoComplete="Github"
            className="input"
          />
        </div>

        <div>
          <label htmlFor="country" className="block text-sm text-white">
            Complete mailing address
          </label>
          <textarea
            id="address"
            name="address"
            autoComplete="address"
            rows={4}
            className="input"
          ></textarea>
        </div>
        <div className="col-span-6 sm:col-span-3">
          <label
            htmlFor="t-shirt"
            className="block text-sm font-medium text-white mb-1"
          >
            T-shirt size
          </label>
          <select
            id="t-shirt"
            name="t-shirt"
            autoComplete="t-shirt"
            className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col-span-6 sm:col-span-3">
          <label
            htmlFor="sweatshirt"
            className="block text-sm font-medium text-white mb-1"
          >
            Sweatshirt size
          </label>
          <select
            id="sweatshirt"
            name="sweatshirt"
            autoComplete="sweatshirt"
            className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center">
            <input
              id="contributor"
              name="contributor"
              type="checkbox"
              className="focus:ring-blue-500 h-4 w-4 text-blue-700 border-gray-300 rounded"
            />
            <label
              htmlFor="contributor"
              className="font-medium text-white ml-3 text-sm"
            >
              I'm a contributor
            </label>
          </div>

          <div className="flex items-center">
            <input
              id="maintainer"
              name="maintainer"
              type="checkbox"
              className="focus:ring-blue-500 h-4 w-4 text-blue-700 border-gray-300 rounded"
            />
            <label
              htmlFor="maintainer"
              className="font-medium text-white ml-3 text-sm"
            >
              I'm a maintainer
            </label>
          </div>
        </div>
      </div>

      <div className="py-10">
        <Button type="submit" onClick={submitFunction}>
          Snag Your Swag
        </Button>
      </div>
    </form>
  );
};

export default SwagForm;
