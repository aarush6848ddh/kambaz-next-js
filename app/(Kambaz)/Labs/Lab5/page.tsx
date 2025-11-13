"use client";

import TOC from "../TOC";
import BasicHttpServer from "./BasicHttpServer";
import ExpressServer from "./ExpressServer";
import ExpressRoutes from "./ExpressRoutes";
import RunningServer from "./RunningServer";
import EnvironmentVariables from "./EnvironmentVariables";
import PathParameters from "./PathParameters";
import QueryParameters from "./QueryParameters";
import WorkingWithObjects from "./WorkingWithObjects";
import WorkingWithArrays from "./WorkingWithArrays";
import HttpClient from "./HttpClient";
import WorkingWithObjectsAsynchronously from "./WorkingWithObjectsAsynchronously";
import WorkingWithArraysAsynchronously from "./WorkingWithArraysAsynchronously";

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;

export default function Lab5() {
  return (
    <div id="wd-lab5">
      <TOC />
      <h2>Lab 5: HTTP Web Server</h2>
      <p>Chapter 5 - Installing and Configuring an HTTP Web Server</p>
      <hr />
      
      <div className="list-group mb-3">
        <a href={`${HTTP_SERVER}/lab5/welcome`}
           className="list-group-item">
          Welcome
        </a>
      </div>
      {/* hyperlink navigates to */}
      {/* http://localhost:4000/lab5/welcome */}
      <hr />
      
      <EnvironmentVariables />
      <PathParameters />
      <QueryParameters />
      <WorkingWithObjects />
      <WorkingWithArrays />
      <HttpClient />
      <WorkingWithObjectsAsynchronously />
      <WorkingWithArraysAsynchronously />
      
      <BasicHttpServer />
      <ExpressServer />
      <ExpressRoutes />
      <RunningServer />
    </div>
  );
}

