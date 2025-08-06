import { FC, useState } from "react";
import scss from "./SearchModal.module.scss";
import { IoClose } from "react-icons/io5";
import { useSearchQuery } from "@/api/search";
import Modal from "react-modal";
import { DebounceInput } from "react-debounce-input";
import Cards from "../../../../ui/cards/Cards";

Modal.setAppElement("body");

interface SearchModalProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const SearchModal: FC<SearchModalProps> = ({ isOpen, setIsOpen }) => {
  const [inputValue, setInputVlue] = useState<string>("");

  const { data: searchData } = useSearchQuery({
    query: inputValue,
    language: "us-US",
  });

  console.log(searchData);

  return (
    <Modal className={scss.modal} isOpen={isOpen} contentLabel="Example Modal">
      <button className={scss.close_btn} onClick={() => setIsOpen(false)}>
        <IoClose size={30} />
      </button>
      <div className={scss.content}>
        <h1 className={scss.title}>Search</h1>
        <DebounceInput
          className={scss.searchInp}
          minLength={2}
          debounceTimeout={300}
          placeholder={"Name movie/tv..."}
          onChange={(e) => setInputVlue(e.target.value)}
          autoFocus
        />
        <div className={scss.listCard}>
          {searchData?.results
            .filter((item) => item.poster_path)
            .map((item, index) => (
              <Cards
                key={index}
                title={item.title}
                id={item.id}
                poster_path={item.poster_path}
                vote_average={item.vote_average}
                release_date={item.release_date}
                overview={item.overview}
              />
            ))}
        </div>
      </div>
    </Modal>
  );
};

export default SearchModal;
