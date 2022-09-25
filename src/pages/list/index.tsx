import React, { useEffect, useState } from "react";
import { cleanObject } from "../../util";
import { Select, Search, Table } from "../../components";
import qs from "qs";
import useDebounce from "hooks/useDebounce";

interface Manager {
  id: string;
  name: string;
}

interface Project {
  id: string;
  name: string;
  personId: string;
  organization: string;
}
type PersonId = string;

const api_url = process.env.REACT_APP_API_URL;
export default function List() {
  const [searchString, setSearchString] = useState<string>("");
  const [managerList, setManagerList] = useState<Manager[]>([]);
  const [projectList, setProjectList] = useState<Project[]>([]);
  const [personId, setPersonId] = useState<PersonId>();

  const debouncedSearchString: string = useDebounce(searchString, 500);
  // fetching project list with parms
  useEffect(() => {
    fetch(api_url + "/projects?" + qs.stringify(cleanObject({ personId })))
      .then((response) => response.json())
      .then((res) => {
        setProjectList(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [personId, setProjectList]);

  // fetch managers list
  useEffect(() => {
    fetch(api_url + "/users")
      .then((response) => response.json())
      .then((res) => {
        setManagerList(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setManagerList]);

  return (
    <>
      <Search searchString={searchString} setSearchString={setSearchString} />
      <Select
        onChange={({ target }: React.ChangeEvent<HTMLInputElement>) => {
          setPersonId(target.value);
          setSearchString("");
        }}
      >
        <Select.Option value="">All</Select.Option>
        {managerList.map((m, index) => (
          <Select.Option value={m.id} key={m.id}>
            {m.name}
          </Select.Option>
        ))}
      </Select>
      <Table>
        <Table.Row>
          <Table.Header>Name</Table.Header>
          <Table.Header>Manager</Table.Header>
        </Table.Row>
        {projectList.map((project) =>
          project.name
            .toLowerCase()
            .includes(debouncedSearchString.toLowerCase()) ? (
            <Table.Row key={project.id}>
              <Table.Data>{project.name}</Table.Data>
              <Table.Data>
                {managerList.find((m) => m.id === project.personId)?.name}
              </Table.Data>
            </Table.Row>
          ) : null
        )}
      </Table>
    </>
  );
}
