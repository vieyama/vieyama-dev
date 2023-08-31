import React from "react";

import {useForm} from "react-hook-form";

import {FinanceDocSection, LegalDocSection, PhotosDocSection} from "./section";
import FooterButton from "../../../components/footer-button";

const RequirementDocumentIndividualForm = () => {
  const {handleSubmit} = useForm();

  const onSubmit = (data: object) => {
    return data;
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <LegalDocSection />
      <FinanceDocSection />
      <PhotosDocSection />
      <FooterButton />
    </form>
  );
};

export default RequirementDocumentIndividualForm;
