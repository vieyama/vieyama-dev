import {useState} from "react";

import {toNumber} from "lodash";

import {useGetRegionList} from "~/services/region/list";

export const useGetRegion = () => {
  const [searchCity, setSearchCity] = useState("");
  const [searchDistrict, setSearchDistrict] = useState("");

  const [selectedProvince, setSelectedProvince] = useState<{
    value: string;
    label: string;
  }>();

  const [selectedCity, setSelectedCity] = useState<{
    value: string;
    label: string;
  }>();

  const [selectedDistrict, setSelectedDistrict] = useState<{
    value: string;
    label: string;
  }>();

  const {data: dataProvince} = useGetRegionList({
    url: "province",
    page: 1,
    per_page: 34,
    country_id: 105,
    search: "",
  });

  const {data: dataCity} = useGetRegionList(
    {
      url: "city",
      page: 1,
      per_page: 10,
      province_id: toNumber(selectedProvince?.value),
      search: searchCity,
    },
    {
      enabled: !!selectedProvince?.value,
    },
  );

  const {data: dataDistrict} = useGetRegionList(
    {
      url: "district",
      page: 1,
      per_page: 10,
      city_id: toNumber(selectedCity?.value),
      search: searchDistrict,
    },
    {
      enabled: !!selectedCity?.value,
    },
  );

  const provinceOption = dataProvince?.results?.map((mitra) => ({
    value: mitra.id.toString(),
    label: mitra.name,
  }));

  const cityOption = dataCity?.results?.map((mitra) => ({
    value: mitra.id.toString(),
    label: mitra.name,
  }));

  const districtOption = dataDistrict?.results?.map((mitra) => ({
    value: mitra.id.toString(),
    label: mitra.name,
  }));

  return {
    setSearchCity: setSearchCity,
    setSearchDistrict: setSearchDistrict,
    selectedProvince: selectedProvince,
    setSelectedProvince: setSelectedProvince,
    selectedCity: selectedCity,
    setSelectedCity: setSelectedCity,
    selectedDistrict: selectedDistrict,
    setSelectedDistrict: setSelectedDistrict,
    provinceOption: provinceOption,
    cityOption: cityOption,
    districtOption: districtOption,
  };
};
