
import React from 'react'
import Header from '../components/header'
import Toolbar from '../components/toolbar';
import SearchInput from '../components/searchInput';
import AddCompanyButton from '../components/add-company-button';
import CompanyTable from '../components/companyTable';
import CompanyRow from '../components/companyRow';
import { Status } from '../components/status-label';

export interface PageProps{};

export default function Page() {
  return (
    <div>
      <Header>Companies</Header>
      <Toolbar action={<AddCompanyButton />}>
        <SearchInput></SearchInput>
      </Toolbar>
      <CompanyTable>
        <CompanyRow
          id={1}
          category="Products"
          company="Costco"
          status={Status.Pending}
          promotion={true}
          country="USA"
          joinedDate="02.19.2023"
        />
      </CompanyTable>
    </div>
  );
}

