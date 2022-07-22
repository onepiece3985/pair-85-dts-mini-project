import React from 'react';

function CardProductionCompany({data}) {
    return (
        <div class="sidebar__post-single">
			<div class="sidebar__post-image">
				<img src={`https://image.tmdb.org/t/p/w200${data.logo_path}`} alt=""/>
			</div>
            <div class="sidebar__post-content">
                <h3>
                    <a href="javascript:void(0);">
                        {data.name}
                    </a>
                </h3>
            </div>
        </div>
    );
}

export default CardProductionCompany;