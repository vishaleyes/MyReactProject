import React, { useEffect, useState, useReducer } from "react";
import { Chart } from "react-google-charts";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

require("dotenv").config();

export default function Graph(props) {
  const [items, setItems] = useState([1, 2]);
  const options = {
    title: "Age vs. Weight comparison",
    hAxis: { title: "Age", viewWindow: { min: 0, max: 15 } },
    vAxis: { title: "Weight", viewWindow: { min: 0, max: 15 } },
    legend: "none",
  };

  const grid = 2;

  const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: "none",
    //padding: grid * 2,
    //margin: `0 ${grid}px 0 0`,

    // change background colour if dragging
    background: isDragging ? "white" : "white",

    // styles we need to apply on draggables
    ...draggableStyle,
  });

  const getListStyle = (isDraggingOver) => ({
   
  });

  //const items = [1, 2];

  const data = [
    ["Age", "Weight"],
    [8, 12],
    [4, 5.5],
    [11, 14],
    [4, 5],
    [3, 3.5],
    [6.5, 7],
  ];

  // fake data generator
  const getItems = (count) =>
    Array.from({ length: count }, (v, k) => k).map((k) => ({
      id: `item-${k}`,
      content: `item ${k}`,
    }));

  // a little function to help us with reordering the result
  const reorder = (list, startIndex, endIndex) => {
    console.log("list", list);
    console.log("startIndex", startIndex);
    console.log("endIndex", endIndex);
    const result = Array.from(items);
    const [removed] = result.splice(startIndex, 1);
    console.log("removed====>", removed);
    result.splice(endIndex, 1, removed);
    console.log("result====>", result);
    return result;
  };

  const onDragEnd = (result) => {console.log("result", result);
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const items = reorder(items, result.source.index, result.destination.index);
    setItems(items);
  };
  console.log("items", items);
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided, snapshot) => (
          <div
            className="container"
            ref={provided.innerRef}
            style={getListStyle(snapshot.isDraggingOver)}
            {...provided.droppableProps}
          >
            <div className="row">
              {items &&
                items.map((item, index) => (
                  <Draggable
                    key={item}
                    draggableId={item.toString()}
                    index={item}
                  >
                    {(provided, snapshot) => (
                      <div
                        className="col-md-6"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={getItemStyle(
                          snapshot.isDragging,
                          provided.draggableProps.style
                        )}
                      >
                        {item == 1 && (
                          <Chart
                            chartType="ScatterChart"
                            data={data}
                            options={options}
                            width="80%"
                            height="400px"
                            legendToggle
                          />
                        )}
                        {item == 2 && (
                          <Chart
                            width={"500px"}
                            height={"300px"}
                            chartType="GeoChart"
                            data={[
                              ["Country", "Popularity"],
                              ["Germany", 200],
                              ["United States", 300],
                              ["Brazil", 400],
                              ["Canada", 500],
                              ["France", 600],
                              ["RU", 700],
                            ]}
                            // Note: you will need to get a mapsApiKey for your project.
                            // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
                            mapsApiKey="AIzaSyA-Qq-U1dbDDfjNqqqjWEoE8bSsQKhV368"
                            rootProps={{ "data-testid": "1" }}
                          />
                        )}
                      </div>
                    )}
                  </Draggable>
                ))}
              {/* <Draggable key={2} draggableId={"2"} index={2}>
                {(provided, snapshot) => (
                  <div
                    className="col-md-6"
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={getItemStyle(
                      snapshot.isDragging,
                      provided.draggableProps.style
                    )}
                  >
                    <Chart
                      width={"500px"}
                      height={"300px"}
                      chartType="GeoChart"
                      data={[
                        ["Country", "Popularity"],
                        ["Germany", 200],
                        ["United States", 300],
                        ["Brazil", 400],
                        ["Canada", 500],
                        ["France", 600],
                        ["RU", 700],
                      ]}
                      // Note: you will need to get a mapsApiKey for your project.
                      // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
                      mapsApiKey="AIzaSyA-Qq-U1dbDDfjNqqqjWEoE8bSsQKhV368"
                      rootProps={{ "data-testid": "1" }}
                    />
                  </div>
                )}
              </Draggable> */}
            </div>

            {/* <Graph
        width={"500px"}
        height={"300px"}
        chartType="GeoChart"
        data={[
          ["Country", "Popularity"],
          ["Germany", 200],
          ["United States", 300],
          ["Brazil", 400],
          ["Canada", 500],
          ["France", 600],
          ["RU", 700],
        ]}
        // Note: you will need to get a mapsApiKey for your project.
        // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
        mapsApiKey="YOUR_KEY_HERE"
        rootProps={{ "data-testid": "1" }}
      /> */}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}
