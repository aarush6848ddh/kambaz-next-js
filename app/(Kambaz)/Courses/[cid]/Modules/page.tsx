"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { ListGroup, ListGroupItem, FormControl } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import ModulesControls from "./ModulesControls";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import { setModules, addModule, editModule, updateModule, deleteModule } from "./reducer";
import * as coursesClient from "../../client";
import * as modulesClient from "./client";

export default function Modules() {
  const params = useParams();
  const cid = params?.cid as string;
  const [moduleName, setModuleName] = useState("");
  const { modules } = useSelector((state: any) => state.modulesReducer); // retrieve modules state variables
  const dispatch = useDispatch(); // get dispatch to call reducer
  
  useEffect(() => {
    const fetchModules = async () => {
      const modules = await coursesClient.findModulesForCourse(cid as string);
      dispatch(setModules(modules));
    };
    fetchModules();
  }, [cid, dispatch]);

  const removeModule = async (moduleId: string) => {
    try {
      await modulesClient.deleteModule(moduleId);
      dispatch(deleteModule(moduleId));
    } catch (error) {
      console.error("Error deleting module:", error);
      alert("Failed to delete module. Please try again.");
    }
  };

  const saveModule = async (module: any) => {
    try {
      await modulesClient.updateModule(module);
      dispatch(updateModule(module));
    } catch (error) {
      console.error("Error updating module:", error);
      alert("Failed to update module. Please try again.");
    }
  };

  return (
    <div>
      <ModulesControls
        moduleName={moduleName}
        setModuleName={setModuleName}
        addModule={async () => {
          if (!moduleName.trim() || !cid) return; // Don't add empty modules
          try {
            const newModule = { name: moduleName, course: cid };
            const module = await coursesClient.createModuleForCourse(cid, newModule);
            dispatch(addModule(module));
            setModuleName("");
          } catch (error) {
            console.error("Error creating module:", error);
            alert("Failed to create module. Please try again.");
          }
        }}
      />
      <br />
      <br />
      <br />
      <br />
      
      <ListGroup className="rounded-0" id="wd-modules">
        {modules.map((module: any) => (
            <ListGroupItem key={module._id} className="wd-module p-0 mb-5 fs-5 border-gray">
              <div className="wd-title p-3 ps-2 bg-secondary">
                <BsGripVertical className="me-2 fs-3" />
                {!module.editing && module.name}
                {/* show name if not editing */}
                {module.editing && (
                  <>
                    <FormControl
                      className="w-50 d-inline-block"
                      value={module.name}
                      onChange={(e) => {
                        dispatch(
                          updateModule({ ...module, name: e.target.value })
                        );
                      }}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          saveModule({ ...module, editing: false });
                        }
                      }}
                    />
                  </>
                )}
                {/* wrap reducer functions with dispatch */}
                {/* show input field if editing */}
                {/* when typing edit the module's */}
                {/* name */}
                {/* if "Enter" key is */}
                {/* pressed then set editing */}
                {/* field to false so we */}
                {/* hide the text field */}
                <ModuleControlButtons
                  moduleId={module._id}
                  deleteModule={(moduleId) => removeModule(moduleId)}
                  editModule={(moduleId) => dispatch(editModule(moduleId))}
                />
                {/* wrap reducer functions with dispatch */}
              </div>
              {module.lessons && (
                <ListGroup className="wd-lessons rounded-0">
                  {module.lessons.map((lesson: any) => (
                    <ListGroupItem key={lesson._id} className="wd-lesson p-3 ps-1">
                      <BsGripVertical className="me-2 fs-3" />
                      {lesson.name}
                      <LessonControlButtons />
                    </ListGroupItem>
                  ))}
                </ListGroup>
              )}
            </ListGroupItem>
          ))}
      </ListGroup>
    </div>
  );
}