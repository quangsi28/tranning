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
  const [editingBrand, setEditingBrand] = useState(null);
  const [isAddBrandModalVisible, setIsAddBrandModalVisible] = useState(false);
  const [isEditBrandModalVisible, setIsEditBrandModalVisible] = useState(false);

  const getBrandsData = () => {
    fetch(window.location.origin.toString() + '/api/brands', { method: 'GET' })
      .then((res) => res.json())
      .then(
        (result) => {
          setBrands(result.data);
          localStorage.setItem('brands', JSON.stringify(result.data));
        },
        (error) => {},
      );
  };

  const handleAddBrandModalClosed = (event: any) => {
    setIsAddBrandModalVisible(false);
  };
  const handleEditBrandModalClosed = (event: any) => {
    setIsEditBrandModalVisible(false);
    setEditingBrand(null);
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
        brand={editingBrand}
        onClose={(event: any) => handleEditBrandModalClosed(event)}
      />
    );
  }

  const handleUpdateBrandClick = (brand: any) => {
    setEditingBrand(brand);
    setIsEditBrandModalVisible(true);
  };

  const handleActiveChanged = (brand: any) => {
    brand.active = !brand.active;
    getBrandsData();
  };

  useEffect(() => {
    getBrandsData();
  }, []);

  return (
    <EuiFlexGroup direction="column" gutterSize="none" style={{ padding: 16 }}>
      <Header
        title="Thương hiệu"
        actions={[
          <EuiButton
            key="add-brand"
            onClick={() => setIsAddBrandModalVisible(true)}
          >
            + Tạo mới
          </EuiButton>,
        ]}
      />
      <EuiPage paddingSize="none">
        <EuiPageSideBar>
          <EuiForm>
            <StatusSelector />
            <SearchBox />
          </EuiForm>
        </EuiPageSideBar>
        <EuiPageBody>
          <BrandList
            brands={brands}
            onEditBrand={handleUpdateBrandClick}
            onActiveChange={handleActiveChanged}
          />
        </EuiPageBody>
      </EuiPage>
      {addBrandModal}
    </EuiFlexGroup>
  );
}
