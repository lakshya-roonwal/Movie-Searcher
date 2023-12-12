import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
const Accordian = ({ movie }) => {
  return (
    <div>
      <Tabs>
        <TabList className={"flex justify-between border-b-2 mb-2 flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400"}>
          <Tab className={'p-2  border-b-2 border-transparent rounded-t-lg font-bold cursor-pointer hover:text-[#1a56db]'}>Crew</Tab>
          <Tab className={'p-2  border-b-2 border-transparent rounded-t-lg font-bold cursor-pointer hover:text-[#1a56db]'}>Ratings</Tab>
          <Tab className={'p-2  border-b-2 border-transparent rounded-t-lg font-bold cursor-pointer hover:text-[#1a56db]'}>Box Office</Tab>
          <Tab className={'p-2  border-b-2 border-transparent rounded-t-lg font-bold cursor-pointer hover:text-[#1a56db]'}>Awards</Tab>
        </TabList>

        <TabPanel>
          <div className="flex gap-8 flex-wrap">
            <p>
            <span className="font-bold">Cast:</span>
              {movie.Actors !== undefined
                ? movie.Actors.split(",").map((e) => {
                    return (
                      <p>
                      <a
                        key={e}
                        target="_blank"
                        href={`https://www.google.com/search?q=${e}`}
                      >
                        {e}
                      </a>
                      </p>
                    );
                  })
                : null}
            </p>
            <p>
              <span className="font-bold">Director :</span>
              {movie.Director !== undefined
                ? movie.Director.split(",").map((e, i) => {
                    return (
                      <a
                        key={e}
                        target="_blank"
                        href={`https://www.google.com/search?q=${e}`}
                      >
                        {e}
                      </a>
                    );
                  })
                : null}
            </p>
            <p>
              <span className="font-bold">Writers :</span>
              {movie.Writer !== undefined
                ? movie.Writer.split(",").map((e, i) => {
                    return (
                      <a
                        key={e}
                        target="_blank"
                        href={`https://www.google.com/search?q=${e}`}
                      >
                        {e},
                      </a>
                    );
                  })
                : null}
            </p>
          </div>
        </TabPanel>
        <TabPanel>
          <div>
            <p>
              {movie.Ratings !== undefined
                ? movie.Ratings.map((e, i) => {
                    return (
                      <>
                      <div className="flex my-1 justify-between w-full md:w-1/2">
                      <span className="font-bold">{e.Source} : </span>
                      <span>{e.Value}</span>
                      </div>
                      </>
                    );
                  })
                : null}
            </p>
          </div>
        </TabPanel>
        <TabPanel>
          <div>
            <p>
              {movie.BoxOffice}
            </p>
          </div>
        </TabPanel>
        <TabPanel>
          <div>
            <p>
              {movie.Awards}
            </p>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Accordian;
