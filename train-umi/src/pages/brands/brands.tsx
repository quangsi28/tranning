import {
  EuiButton,
  EuiFlexGroup,
  EuiForm,
  EuiPage,
  EuiPageBody,
  EuiPageSideBar,
} from '@elastic/eui';
import { useContext, useState } from 'react';
import { useEffect } from 'react';
import { SearchBox } from '../common/search-box';
import { APP_STATUS, StatusSelector } from '../common/status-selector';
import { BrandModal } from './brand-modal';
import { BrandList } from './brand-list';
import { Header } from './header';
import { Brand } from './models/brand';
import './brands.less';
import ToastContext, { ToastContextProvider } from '../contexts/toast-context';
import {
  getBrandList,
  requestCreateBrand,
  requestUpdateBrand,
  updateBrandStatus,
} from '../services/brand-service';

export default function Brands() {
  const [brands, setBrands] = useState<Brand[]>([]);
  const [selectedStatus, setSelectedStatus] = useState<any>(APP_STATUS.all);
  const [searchKeyword, setSearchKeyword] = useState<string>('');
  const [editingBrand, setEditingBrand] = useState<Brand | any>(null);
  const [isAddBrandModalVisible, setIsAddBrandModalVisible] = useState(false);
  const [isEditBrandModalVisible, setIsEditBrandModalVisible] = useState(false);
  const [pagination, setPagination] = useState<any>({
    pageIndex: 0,
    pageSize: 10,
    totalItemCount: 0,
  });

  const addToast = useContext(ToastContext);

  const handleAddBrandModalClosed = (brandName: any) => {
    const formattedName = brandName?.trim();
    if (!formattedName) {
      setIsAddBrandModalVisible(false);
      return;
    }
    createBrand(brandName);
    setIsAddBrandModalVisible(false);
  };

  const handleEditBrandModalClosed = (brandName: any) => {
    const formattedName = brandName?.trim();
    if (!formattedName || !editingBrand) {
      setIsEditBrandModalVisible(false);
      setEditingBrand(null);
      return;
    }
    updateBrandName(brandName);
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
    changeBrandStatus(brand._id);
  };

  const handleStatusChanged = (status: any) => {
    setSelectedStatus(status);
  };

  const handleSearchBrandChanged = (keyword: string) => {
    setSearchKeyword(keyword);
  };

  const handlePageChanged = (e: any) => {
    setPagination({
      pageIndex: e.page.index,
      pageSize: e.page.size,
      totalItemCount: pagination.totalItemCount,
    });
  };

  useEffect(() => {
    getBrandsData();
  }, [
    selectedStatus,
    searchKeyword,
    pagination.pageIndex,
    ,
    pagination.pageSize,
  ]);

  function getBrandsData() {
    getBrandList(
      pagination.pageSize,
      pagination.pageIndex,
      getRequestStatus(),
      searchKeyword,
    ).then((result: any) => {
      const responseData = result.data.data;
      console.log(responseData.data);
      setBrands(responseData.data);
      const _pagination = {
        pageIndex: pagination.pageIndex,
        pageSize: responseData.limitPerPage,
        totalItemCount: responseData.total,
      };
      setPagination(_pagination);
    }, console.error);
  }

  function createBrand(name: string) {
    requestCreateBrand(name).then((response: any) => {
      getBrandsData();
    });
  }

  function updateBrandName(brandName: string) {
    const updateBrand: Brand = {
      _id: editingBrand._id,
      name: brandName,
    };
    requestUpdateBrand(updateBrand).then((response: any) => {
      getBrandsData();
    });
  }

  function changeBrandStatus(brandId: string) {
    updateBrandStatus(brandId).then((response: any) => {
      console.log(response);
      addToast('success');
      getBrandsData();
    });
  }

  function getRequestStatus() {
    switch (selectedStatus) {
      case APP_STATUS.active:
        return [true];
      case APP_STATUS.inactive:
        return [false];
      case APP_STATUS.all:
        return [true, false];
    }
  }

  return (
    <ToastContextProvider>
      <EuiFlexGroup
        className="page-container"
        direction="column"
        gutterSize="none"
      >
        <Header
          title={`THƯƠNG HIỆU (${brands.length})`}
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
              <StatusSelector onStatusChange={handleStatusChanged} />
              <SearchBox onSearch={handleSearchBrandChanged} />
            </EuiForm>
          </EuiPageSideBar>
          <EuiPageBody>
            <BrandList
              brands={brands}
              onEditBrand={handleUpdateBrandClick}
              onActiveChange={handleActiveChanged}
              onTableChange={handlePageChanged}
              pagination={pagination}
            />
          </EuiPageBody>
        </EuiPage>
        {addBrandModal}
      </EuiFlexGroup>
    </ToastContextProvider>
  );
}
