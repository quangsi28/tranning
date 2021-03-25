import {
  EuiButton,
  EuiFieldSearch,
  EuiFieldText,
  EuiFlexGroup,
  EuiForm,
  EuiFormControlLayout,
  EuiFormLabel,
  EuiPage,
  EuiPageBody,
  EuiPageSideBar,
  EuiSpacer,
} from '@elastic/eui';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { SearchBox } from '../common/search-box';
import { StatusSelector } from '../common/status-selector';
import { BrandModal } from './brand-modal';
import { BrandList } from './brand-list';
import { Header } from './header';

const user = {
  id: '1',
  firstName: 'john',
  lastName: 'doe',
  github: 'johndoe',
  dateOfBirth: Date.now(),
  nationality: 'NL',
  online: true,
};

// const brands = [user, user, user];

export default function Brands() {
  const [brands, setBrands] = useState([]);
  const [isAddBrandModalVisible, setIsAddBrandModalVisible] = useState(false);
  const [isEditBrandModalVisible, setIsEditBrandModalVisible] = useState(false);

  const getBrandsData = () => {
    fetch(window.location.origin.toString() + '/api/brands', { method: 'GET' })
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          setBrands(result.data);
        },
        (error) => {},
      );
  };

  const headerActions = [
    <EuiButton key="add-brand" onClick={() => setIsAddBrandModalVisible(true)}>
      + Tạo mới
    </EuiButton>,
  ];

  const handleAddBrandModalClosed = (event: any) => {
    console.log(event);
    setIsAddBrandModalVisible(false);
  };

  let addBrandModal;
  if (isAddBrandModalVisible) {
    addBrandModal = (
      <BrandModal
        title="Tạo mới"
        onClose={(event: any) => handleAddBrandModalClosed(event)}
      />
    );
  }
  if (isEditBrandModalVisible) {
    addBrandModal = (
      <BrandModal
        title="Cập nhật"
        onClose={(event: any) => handleAddBrandModalClosed(event)}
      />
    );
  }

  useEffect(() => {
    getBrandsData();
  }, []);

  return (
    <EuiFlexGroup direction="column" gutterSize="none" style={{ padding: 16 }}>
      <Header title="Thương hiệu" actions={[headerActions]} />
      <EuiPage paddingSize="none">
        <EuiPageSideBar>
          <EuiForm>
            <StatusSelector />
            <SearchBox />
          </EuiForm>
        </EuiPageSideBar>
        <EuiPageBody>
          <BrandList brands={brands} />
        </EuiPageBody>
      </EuiPage>
      {addBrandModal}
    </EuiFlexGroup>
  );
}
