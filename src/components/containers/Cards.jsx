import React from 'react';
import { Link, NavLink } from "react-router-dom";

function Cards({data}) {
    return (
        <div class="col-lg-4 mb-5">
            <div class="blog-one__single">
                <div class="blog-one__image">
                    <img
                        src={`https://image.tmdb.org/t/p/w300${data.poster_path}`}
                        alt=""
                    />
                    
                        <Link to={`movies/${data.id}`}>
                            <i class="fal fa-plus"></i>
                        </Link>
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
                        <Link to={`movies/${data.id}`}>
                            {data.title}
                        </Link>
                    </h3>
                    <NavLink to={`movies/${data.id}`} className="thm-btn blog-one__btn btn-block">
                        <span>Detail</span>
                    </NavLink>    
                </div>
            </div>
        </div>
    );
}

export default Cards;