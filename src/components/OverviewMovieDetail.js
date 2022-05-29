import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import PropTypes from "prop-types";

import Raiting from "./Raiting";
import FavoriteMovie from "./FavoriteMovie";
import MovieImage from "./MovieImage";

function OverviewMovieDetail({
  isModalOpen,
  onModalClose,
  movieId,
  title,
  poster_path,
  overview,
  vote_average,
}) {
  const [open, setOpen] = useState(isModalOpen);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => {
          setOpen(false);
          onModalClose(false);
        }}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <MovieImage {...{ title, poster_path }} />
                      <div className="flex justify-between m-1 items-center">
                        <Dialog.Title
                          as="h3"
                          className="text-lg leading-6 font-medium text-gray-900"
                        >
                          {title}
                        </Dialog.Title>
                        <div className="flex items-center space-between">
                          <Raiting
                            key={`raiting-${movieId}`}
                            vote_average={vote_average}
                          />
                          <FavoriteMovie
                            key={`favorite-${movieId}`}
                            {...{
                              movieId,
                              title,
                              poster_path,
                              overview,
                              vote_average,
                            }}
                          />
                        </div>
                      </div>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">{overview}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

OverviewMovieDetail.propTypes = {
  isModalOpen: PropTypes.bool,
  onModalClose: PropTypes.func,
  movieId: PropTypes.string,
  title: PropTypes.string,
  poster_path: PropTypes.string,
  overview: PropTypes.string,
  vote_average: PropTypes.number,
};

export default OverviewMovieDetail;
