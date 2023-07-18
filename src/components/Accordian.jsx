import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
const Accordian = ({ movie }) => {
  return (
    <div>
      <Tabs>
        <TabList className={"flex justify-between flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400"}>
          <Tab className={'inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group cursor-pointer'}>Crew</Tab>
          <Tab className={'inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group cursor-pointer'}>Ratings</Tab>
          <Tab className={'inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group cursor-pointer'}>Box Office</Tab>
          <Tab className={'inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group cursor-pointer'}>Awards</Tab>
        </TabList>

        <TabPanel>
          <div>
            <p>
              <span>Cast :</span>
              {movie.Actors !== undefined
                ? movie.Actors.split(",").map((e) => {
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
          </div>
        </TabPanel>
        <TabPanel>
          <div>
            <p>
              <span>Director :</span>
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
          </div>
        </TabPanel>
        <TabPanel>
          <div>
            <p>
              <span>Box Office :</span>
              {movie.BoxOffice}
            </p>
          </div>
        </TabPanel>
        <TabPanel>
          <div>
            <p>
              <span>Awards :</span>
              {movie.Awards}
            </p>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Accordian;
