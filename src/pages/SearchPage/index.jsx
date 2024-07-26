import React, { useContext, useState } from "react";
import styles from "./SearchPage.module.css";
import DocumentImage from "../../assets/images/SearchPageImg3.svg";
import { getGeneralData, getData, getDetailData } from "../../api/dataService";
import { useNavigate } from "react-router-dom";
import ResultContext from "../../context/createContext";

import FolderImage from "../../assets/images/SearchPageImg2.svg";
import GroupImage from "../../assets/images/SearchPageImg1.svg";


const SearchPage = () => {
  const navigate = useNavigate();
  const context = useContext(ResultContext)

  const [searchData, setSearchData] = useState({
    inn: "",
    completeness: false,
    businessContext: false,
    mainRole: false,
    tonality: "",
    riskFactors: false,
    technicalNews: false,
    announcements: false,
    newsDigests: false,
    documentCount: "",
    startDate: "",
    endDate: "",
  });

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    setSearchData({
      ...searchData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSearch = async () => {
    navigate('/result')
    context.setGeneralData(await getGeneralData(searchData))
    context.setData(await getData(searchData))
  };

  const isFormValid = () => {
    // Проверка на корректность введенных данных
    return (
      searchData.inn.length > 0 &&
      searchData.tonality.length > 0 &&
      searchData.documentCount.length > 0 &&
      searchData.startDate.length > 0 &&
      searchData.endDate.length > 0
    );
  };

  return (

    <main className={styles.searchPage}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          НАЙДИТЕ НЕОБХОДИМЫЕ
          <p>ДАННЫЕ В ПАРУ КЛИКОВ.</p>
        </h1>
        <p className={styles.text}>
          Задайте параметры поиска. Чем больше заполните, тем точнее поиск
        </p>
        <div className={styles.searchContent}>
          <form className={styles.form}>
            <div className={styles.column}>
              <div className={styles.left}>
                <label htmlFor="inn" className={styles.left_label}>
                  ИНН Компани*
                </label>
                <input
                  type="text"
                  id="inn"
                  name="inn"
                  value={searchData.inn}
                  onChange={handleInputChange}
                  required
                  className={styles.left_input}
                  placeholder="10 цифр"
                />
                <label htmlFor="tonality" className={styles.label}>
                  Тональность*
                </label>
                <select
                  id="tonality"
                  name="tonality"
                  value={searchData.tonality}
                  onChange={handleInputChange}
                  required
                  className={styles.select}
                >
                  <option value="any">Любая</option>
                  <option value="positive">Позитивная</option>
                  <option value="negative">Негативная</option>
                </select>
                <label htmlFor="documentCount" className={styles.left_label}>
                  Количество документов в выдаче*
                </label>
                <input
                  type="number"
                  id="documentCount"
                  name="documentCount"
                  value={searchData.documentCount < 0 ? 0 : searchData.documentCount}
                  onChange={handleInputChange}
                  required
                  className={styles.left_input}
                  placeholder="1 до 1000"
                />
                <h1>Диапозон поиска*</h1>
                <div className={styles.data}>
                  <label
                    htmlFor="startDate"
                    className={styles.left_label}
                  ></label>
                  <input
                    placeholder="Дата начала"
                    type="date"
                    id="startDate"
                    name="startDate"
                    value={searchData.startDate}
                    onChange={handleInputChange}
                    required
                    className={styles.left_input}
                  />
                  <div className={styles.date_separator}></div>
                  <label htmlFor="endDate" className={styles.left_label}></label>
                  <input
                    placeholder="Дата конца"
                    type="date"
                    id="endDate"
                    name="endDate"
                    value={searchData.endDate}
                    onChange={handleInputChange}
                    required
                    className={styles.left_input}
                  />
                </div>
              </div>
            </div>
            <div className={styles.column}>
              <div className={styles.right}>
                <div className={styles.checkbox}>
                  <input
                    type="checkbox"
                    id="completeness"
                    name="completeness"
                    checked={searchData.completeness}
                    onChange={handleInputChange}
                    className={styles.checkbox}
                  />
                  <label htmlFor="completeness" className={styles.label}>
                    Признак максимальной полноты
                  </label>
                </div>
                <div className={styles.checkbox}>
                  <input
                    type="checkbox"
                    id="businessContext"
                    name="businessContext"
                    checked={searchData.businessContext}
                    onChange={handleInputChange}
                    className={styles.checkbox}
                  />
                  <label htmlFor="businessContext" className={styles.label}>
                    Упоминания в бизнес-контексте
                  </label>
                </div>
                <div className={styles.checkbox}>
                  <input
                    type="checkbox"
                    id="mainRole"
                    name="mainRole"
                    checked={searchData.mainRole}
                    onChange={handleInputChange}
                    className={styles.checkbox}
                  />
                  <label htmlFor="mainRole" className={styles.label}>
                    Главная роль в публикации
                  </label>
                </div>
                <div className={styles.checkbox}>
                  <input
                    type="checkbox"
                    id="riskFactors"
                    name="riskFactors"
                    checked={searchData.riskFactors}
                    onChange={handleInputChange}
                    className={styles.checkbox}
                  />
                  <label htmlFor="riskFactorss" for="riskFactors" className={styles.label}>
                    Публикации только с риск-факторами{" "}
                  </label>
                </div>
                <div className={styles.checkbox}>
                  <input
                    type="checkbox"
                    id="technicalNews"
                    name="technicalNews"
                    checked={searchData.technicalNews}
                    onChange={handleInputChange}
                    className={styles.checkbox}
                  />
                  <label htmlFor="technicalNews" className={styles.label}>
                    Включать технические новости рынков
                  </label>
                </div>
                <div className={styles.checkbox}>
                  <input
                    type="checkbox"
                    id="announcements"
                    name="announcements"
                    checked={searchData.announcements}
                    onChange={handleInputChange}
                    className={styles.checkbox}
                  />
                  <label htmlFor="announcements" className={styles.label}>
                    Включать анонсы и календари
                  </label>
                </div>
                <div className={styles.checkbox}>
                  <input
                    type="checkbox"
                    id="newsDigests"
                    name="newsDigests"
                    checked={searchData.newsDigests}
                    onChange={handleInputChange}
                    className={styles.checkbox}
                  />
                  <label htmlFor="newsDigests" className={styles.label}>
                    Включать сводки новостей
                  </label>
                </div>
                <button
                  type="button"
                  onClick={handleSearch}
                  disabled={!isFormValid()}
                  className={styles.submitButton}
                >
                  Поиск
                </button>
                <p className={styles.text2}>* Обязательные к заполнению поля</p>
              </div>
            </div>
          </form>
          <div className={styles.imageContainer}>
            <img
              src={DocumentImage}
              alt="Search Page"
              className={styles.imageDoc}
            />
            <img src={FolderImage} alt="Search Page" className={styles.imageFol} />
            <img src={GroupImage} alt="Search Page" className={styles.imageGro} />
          </div>
        </div>
      </div>

    </main>


  );
};

export { SearchPage };