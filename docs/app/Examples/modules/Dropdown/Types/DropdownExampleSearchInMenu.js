import React from 'react'
import { Dropdown, Input } from 'semantic-ui-react'

import { tagOptions } from '../common'

const DropdownExampleSearchInMenu = () => (
  <Dropdown text='Filter Posts' floating labeled button className='icon'>
    {/* <i class="filter icon"></i> */}
    <Dropdown.Menu>
      <Input icon='search' iconPosition='left' className='search' />
      <Dropdown.Divider />
      <Dropdown.Header icon='tags' content='Tag Label' />
      <Dropdown.Menu scrolling>
        {tagOptions.map((option) => <Dropdown.Item key={option.value} {...option} />)}
      </Dropdown.Menu>
    </Dropdown.Menu>
  </Dropdown>
)

export default DropdownExampleSearchInMenu
