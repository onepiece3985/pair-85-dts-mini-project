import React from 'react';

function Cards({data}) {
    return (
        <div class="col-lg-4 mb-5" key={data.id}>
            <div class="blog-one__single">
                <div class="blog-one__image">
                    <img
                        src={`https://image.tmdb.org/t/p/w300${data.poster_path}`}
                        alt=""
                    />
                    <a href={data.id}>
                        <i class="fal fa-plus"></i>
                    </a>
                </div>
                <div class="blog-one__content">
                    <div class="blog-one__meta">
                        <a href="javascript:void(0);">
                            Rating : {data.vote_average}
                        </a>
                        <span>-</span>
                        <a href="javascript:void(0);">
                            {data.release_date}
                        </a>
                    </div>
                    <h3>
                        <a href={data.id}>
                            {data.title}
                        </a>
                    </h3>
                    <a
                        href={`movies/${data.id}`}
                        class="thm-btn blog-one__btn btn-block"
                    >
                        <span>Detail</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Cards;