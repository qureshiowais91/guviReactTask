import DataTable from 'react-data-table-component';

const columns = [
  {
    name: 'Name',
    selector: (row) => row.name,
  },
  {
    name: 'Position',
    selector: (row) => row.position,
  },
  {
    name: 'Office',
    selector: (row) => row.office,
  },
  {
    name: 'Age',
    selector: (row) => row.age,
  },
  {
    name: 'Date',
    selector: (row) => row.startDate,
  },
  {
    name: 'Salary',
    selector: (row) => row.salary,
  },
];

const paginationComponentOptions = {
  rowsPerPageText: 'Per Page List',
  rangeSeparatorText: 'to',
  selectAllRowsItem: true,
  selectAllRowsItemText: 'Show All',
};

const data = [
  {
    name: 'John Doe',
    position: 'Software Engineer',
    office: 'New York',
    age: 28,
    startDate: '2020-03-15',
    salary: 90000,
  },
  {
    name: 'Jane Smith',
    position: 'Marketing Manager',
    office: 'Los Angeles',
    age: 32,
    startDate: '2018-07-10',
    salary: 110000,
  },
  {
    name: 'Michael Johnson',
    position: 'Sales Representative',
    office: 'Chicago',
    age: 25,
    startDate: '2021-01-20',
    salary: 75000,
  },
  {
    name: 'Emily Davis',
    position: 'HR Manager',
    office: 'Houston',
    age: 29,
    startDate: '2019-05-08',
    salary: 85000,
  },
  {
    name: 'David Brown',
    position: 'Financial Analyst',
    office: 'San Francisco',
    age: 33,
    startDate: '2017-11-12',
    salary: 100000,
  },
  {
    name: 'Jessica Wilson',
    position: 'Product Manager',
    office: 'Boston',
    age: 30,
    startDate: '2016-09-22',
    salary: 105000,
  },
  {
    name: 'Andrew Miller',
    position: 'IT Specialist',
    office: 'Seattle',
    age: 27,
    startDate: '2022-02-18',
    salary: 80000,
  },
  {
    name: 'Olivia Martinez',
    position: 'Graphic Designer',
    office: 'Miami',
    age: 26,
    startDate: '2019-11-05',
    salary: 75000,
  },
  {
    name: 'William Taylor',
    position: 'Project Manager',
    office: 'Denver',
    age: 31,
    startDate: '2018-04-30',
    salary: 95000,
  },
  {
    name: 'Sophia Clark',
    position: 'Data Analyst',
    office: 'Austin',
    age: 28,
    startDate: '2020-06-15',
    salary: 85000,
  },
  {
    name: 'Jackson White',
    position: 'Accountant',
    office: 'Phoenix',
    age: 29,
    startDate: '2017-09-10',
    salary: 88000,
  },
  {
    name: 'Mia Anderson',
    position: 'Customer Support',
    office: 'Atlanta',
    age: 24,
    startDate: '2021-08-22',
    salary: 70000,
  },
  {
    name: 'Liam Harris',
    position: 'UX Designer',
    office: 'Portland',
    age: 26,
    startDate: '2019-03-25',
    salary: 92000,
  },
  {
    name: 'Ava King',
    position: 'Product Designer',
    office: 'Detroit',
    age: 30,
    startDate: '2018-12-01',
    salary: 96000,
  },
  {
    name: 'Noah Martinez',
    position: 'Software Developer',
    office: 'San Diego',
    age: 29,
    startDate: '2016-10-18',
    salary: 105000,
  },
  {
    name: 'Isabella Robinson',
    position: 'Marketing Specialist',
    office: 'Minneapolis',
    age: 27,
    startDate: '2022-01-05',
    salary: 82000,
  },
  {
    name: 'James Lewis',
    position: 'Operations Manager',
    office: 'Philadelphia',
    age: 34,
    startDate: '2015-07-12',
    salary: 110000,
  },
  {
    name: 'Sophia Johnson',
    position: 'Financial Advisor',
    office: 'Charlotte',
    age: 31,
    startDate: '2017-04-09',
    salary: 99000,
  },
  {
    name: 'Logan Hall',
    position: 'Content Writer',
    office: 'Nashville',
    age: 28,
    startDate: '2019-09-03',
    salary: 78000,
  },
  {
    name: 'Emma Young',
    position: 'HR Specialist',
    office: 'Dallas',
    age: 25,
    startDate: '2020-12-20',
    salary: 75000,
  },
  {
    name: 'Jacob Moore',
    position: 'Sales Manager',
    office: 'Kansas City',
    age: 32,
    startDate: '2016-02-15',
    salary: 108000,
  },
  {
    name: 'Olivia Walker',
    position: 'Data Scientist',
    office: 'Raleigh',
    age: 29,
    startDate: '2021-10-10',
    salary: 98000,
  },
  {
    name: 'Ethan Turner',
    position: 'Business Analyst',
    office: 'Cleveland',
    age: 27,
    startDate: '2018-06-28',
    salary: 92000,
  },
  {
    name: 'Ava Brown',
    position: 'UX Designer',
    office: 'Las Vegas',
    age: 26,
    startDate: '2017-03-22',
    salary: 88000,
  },
  {
    name: 'Liam Martinez',
    position: 'Project Manager',
    office: 'Orlando',
    age: 30,
    startDate: '2022-05-01',
    salary: 96000,
  },
  {
    name: 'Mia Adams',
    position: 'Software Engineer',
    office: 'Salt Lake City',
    age: 28,
    startDate: '2019-11-08',
    salary: 105000,
  },
  {
    name: 'Jackson Allen',
    position: 'Marketing Coordinator',
    office: 'Indianapolis',
    age: 31,
    startDate: '2016-08-16',
    salary: 87000,
  },
  {
    name: 'Isabella White',
    position: 'Product Manager',
    office: 'St. Louis',
    age: 29,
    startDate: '2021-02-12',
    salary: 99000,
  },
  {
    name: 'James Green',
    position: 'Sales Representative',
    office: 'Baltimore',
    age: 27,
    startDate: '2018-04-05',
    salary: 80000,
  },
  {
    name: 'Sophia Davis',
    position: 'Financial Analyst',
    office: 'Denver',
    age: 25,
    startDate: '2017-09-30',
    salary: 94000,
  },
];

function TabelCompo() {
  return (
    <div className='container'>
      <h3>Tables</h3>
      Tables DataTables is a third party plugin that is used to generate the
      demo table below. For more information about DataTables, please visit the
      official DataTables documentation.
      <div className='card shadow mt-5'>
        <div className='card-header '>
          <h6 class='m-0 font-weight-bold text-primary'>DataTables Example</h6>
        </div>

        <div className='cardBody'>
          
          <DataTable
            columns={columns}
            data={data}
            pagination
            paginationComponentOptions={paginationComponentOptions}
          />
        </div>
      </div>
    </div>
  );
}

export default TabelCompo;
