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
import { AppStatus, StatusSelector } from '../common/status-selector';
import { BrandModal } from './brand-modal';
import { BrandList } from './brand-list';
import { Header } from './header';
import { Brand } from './models/brand';
import { v4 as uuidv4 } from 'uuid';

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
  const [brands, setBrands] = useState<Brand[]>([]);
  const [filteredBrands, setFilteredBrands] = useState<Brand[]>([]);
  const [selectedStatus, setSelectedStatus] = useState<any>(AppStatus.all);
  const [keyword, setKeyword] = useState<string>('');
  const [editingBrand, setEditingBrand] = useState<Brand | any>(null);
  const [isAddBrandModalVisible, setIsAddBrandModalVisible] = useState(false);
  const [isEditBrandModalVisible, setIsEditBrandModalVisible] = useState(false);

  const getBrandsData = () => {
    fetch(window.location.origin.toString() + '/api/brands', { method: 'GET' })
      .then((res) => res.json())
      .then(
        (result) => {
          setBrands(result.data);
          setFilteredBrands(result.data);
          localStorage.setItem('brands', JSON.stringify(result.data));
        },
        (error) => {},
      );
  };

  const filterBrands = () => {
    if (!brands || brands.length === 0) {
      setFilteredBrands(brands);
    }
    const filteredResult = brands.filter((brand) => {
      let result;
      if (keyword) {
        result = brand.name?.includes(keyword);
      }
      if (selectedStatus === AppStatus.active) {
        result = brand.active === true;
      }
      if (selectedStatus === AppStatus.inactive) {
        result = brand.active === false;
      }
      return result;
    });
    console.log(filteredResult);

    setFilteredBrands(filteredResult);
  };

  const handleAddBrandModalClosed = (brandName: any) => {
    const formattedName = brandName?.trim();
    if (!formattedName) {
      setIsAddBrandModalVisible(false);
      return;
    }
    const newBrand: Brand = {
      id: uuidv4(),
      name: brandName,
      createdAt: new Date().toISOString(),
      active: false,
    };
    brands.push(newBrand);
    setBrands([...brands]);
    setIsAddBrandModalVisible(false);
  };
  const handleEditBrandModalClosed = (brandName: any) => {
    const formattedName = brandName?.trim();
    if (!formattedName || !editingBrand) {
      setIsEditBrandModalVisible(false);
      setEditingBrand(null);
      return;
    }
    editingBrand.name = brandName;
    setBrands([...brands]);
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
    setBrands([...brands]);
  };

  const handleStatusChange = (status: any) => {
    setSelectedStatus(status);
    filterBrands();
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
            <StatusSelector onStatusChange={handleStatusChange} />
            <SearchBox />
          </EuiForm>
        </EuiPageSideBar>
        <EuiPageBody>
          <BrandList
            brands={filteredBrands}
            onEditBrand={handleUpdateBrandClick}
            onActiveChange={handleActiveChanged}
          />
        </EuiPageBody>
      </EuiPage>
      {addBrandModal}
    </EuiFlexGroup>
  );
}
