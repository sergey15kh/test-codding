<div class="cases-tabs-wrapper">
                <div class="tabs-cases">
                    <button class="tab-cases" data-filter="all"><?php _e( 'Усі', 'ukrfast' ); ?></button>
                    <?php if ( !empty( $labels ) ) : ?>
                        <?php foreach ( $labels as $key => $label ) : ?>
                            <button class="tab-cases" data-filter="tab<?php echo $key + 1; ?>"><?php echo $label; ?></button>
                        <?php endforeach; ?>
                    <?php endif; ?>
                </div>
                <div class="swiper case-slider">
                    <?php if ( !empty( $cases_with_labels ) ) : ?>
                        <div class="swiper-wrapper">
                            <?php foreach ( $cases_with_labels as $case_category => $cases_array ) : ?>
                                <?php if ( !empty( $cases_array ) ) : ?>
                                    <?php foreach ( $cases_array as $case_data ) : ?>
                                        <?php $case_link = get_the_permalink( $case_data['ID'] ); ?>
                                        <div class="swiper-slide tab<?php echo array_search( $case_category, $labels ) + 1; ?>">
                                            <ul class="slide-list">
                                                <li class="slide-item" data-url="<?php echo $case_link; ?>">
                                                    <a href="<?php echo $case_link; ?>" class="category"><?php echo $case_category; ?></a>
                                                    <a class="title" href="<?php echo $case_link; ?>"><h5><?php echo $case_data['post_title']; ?></h5></a>
                                                    <span class="date"><?php echo date( 'd M, Y', strtotime( $case_data['post_date'] ) ); // 25 October, 2023 ?></span>
                                                </li>
                                            </ul>
                                        </div>
		                            <?php endforeach; ?>
                                <?php endif; ?>
                            <?php endforeach; ?>

                        </div>
                    <?php endif; ?>
                    <div class="swiper-pagination"></div>
                </div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
            </div>