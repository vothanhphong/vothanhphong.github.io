let url = new URL(window.location.href),
    lang = url.searchParams.get('lang') ? url.searchParams.get('lang') : 'en',
    baseUrl = window.location.href.split('/');

baseUrl = baseUrl[0] + '//' + baseUrl[2];

let banner = new Vue({
    el: '#banner',
    data: {
        name: myTranslate({
            en: 'Nguyen Dinh Dang',
            vi: 'Nguyễn Đình Đăng'
        }),
        dev: 'php developer',
        link: [
            {
                title: 'Github',
                url: 'https://github.com/nddang196',
                class: 'fab fa-github-alt'
            },
            {
                title: 'Linkedin',
                url: 'https://www.linkedin.com/in/nddang196/',
                class: 'fab fa-linkedin-in'
            },
            {
                title: 'Facebook',
                url: 'https://fb.com/congiovothanh',
                class: 'fab fa-facebook-f'
            },
        ]
    }
});

let language = new Vue({
    el: '#language',
    data: {
        items: [
            {
                text: myTranslate({
                    en: 'English',
                    vi: 'Tiếng Anh'
                }),
                url: baseUrl + '?lang=en',
                icon: baseUrl + '/media/images/language/en.png'
            },
            {
                text: myTranslate({
                    en: 'Vietnamese',
                    vi: 'Tiếng Việt'
                }),
                url: baseUrl + '?lang=vi',
                icon: baseUrl + '/media/images/language/vi.png'
            }
        ]
    }
});

let about = new Vue({
    el: '#about',
    data: {
        title: myTranslate({
            en: 'About Me',
            vi: 'Giới Thiệu'
        }),
        contact: {
            title: myTranslate({
                en: 'Contact Info',
                vi: 'Thông Tin Liên Hệ'
            }),
            items: [
                {
                    text: myTranslate({
                        en: 'Dong La - Hoai Duc - Ha Noi',
                        vi: 'Đông La - Hoài Đức - Hà Nội'
                    }),
                    class: 'fas fa-map-marker-alt'
                },
                {
                    text: '(+84) 363898196',
                    class: 'fas fa-phone'
                },
                {
                    text: 'nddang196@gmail.com',
                    class: 'fas fa-envelope'
                },
                {
                    text: 'nddang196@hotmail.com',
                    class: 'fab fa-skype'
                },
            ]
        },
        summary: {
            title: myTranslate({
                en: 'Summary',
                vi: 'Sơ Lược'
            }),
            contents: [
                {
                    text: myTranslate({
                        en: 'I\'m Nguyen Dinh Dang, a PHP Developer with 1 year experience working with ' +
                            'Magento framework in e-commerce.' +
                            'I have knowledge of Laravel framework and used it to make an online shop.',
                        vi: 'Tôi là Nguyễn Đình Đăng, một lập trình viên PHP với 1 năm kinh nghiệm làm việc với ' +
                            'Magento framework trong lĩnh vực thương mại điện tử. ' +
                            'Tôi có kiến thức về Laravel framework và sử dụng nó để làm web bán hàng trực tuyến.'
                    })
                },
                {
                    text: myTranslate({
                        en: 'I like simplicity, so I always try to make my code the best in my ability. ' +
                            'I\'m quite active in the team work because I like helping people in my team and ' +
                            'other team. I am happy if my solutions or knowledge can help people solve the problem.',
                        vi: 'Tôi thích sự đơn giản, vì vậy tôi luôn cố gắng làm code của mình tối ưu nhất trong ' +
                            'khả năng của tôi. Tôi được đánh giá khá tích cực trong nhóm vì tôi thích giúp đỡ ' +
                            'mọi người trong team hoặc team khác. Tôi cảm thấy vui khi thấy solutions của tôi ' +
                            'có thế giúp họ giải quyết vấn đề.'
                    })
                },
            ]
        },
        download: {
            title: myTranslate({
                en: 'Download My CV (pdf)',
                vi: 'Tải xuống CV (pdf)'
            }),
            link: myTranslate({
                en: baseUrl + '/pub/pdf/NGUYEN_DINH_DANG_PHP_DEVELOPER_CV_EN.pdf',
                vi: baseUrl + '/pub/pdf/NGUYEN_DINH_DANG_PHP_DEVELOPER_CV_VI.pdf'
            })
        }
    }
});

let skill = new Vue({
    el: '#skills',
    data: {
        title: myTranslate({
            en: 'Skills',
            vi: 'Kỹ Năng'
        }),
        items: [
            [
                {
                    title: 'PROGRAMMING LANGUAGES',
                    items: {
                        0: 'PHP',
                        1: 'Html, Css',
                        3: 'Javascript',
                        4: 'Java'
                    }
                }
            ],
            [
                {
                    title: 'Frameworks & Platforms',
                    items: {
                        0: 'Magento / Laravel',
                        1: 'Bootstrap',
                        3: 'Jquery / Knockout / Vue'
                    }
                },
                {
                    title: 'OS',
                    items: {
                        0: 'Window - Vagrant',
                        1: 'Linux - Ubuntu',
                    }
                }
            ],
            [
                {
                    title: 'Database',
                    items: {
                        0: 'Mysql / Mariadb'
                    }
                },
                {
                    title: myTranslate({
                        en: 'Others',
                        vi: 'Khác'
                    }),
                    items: {
                        0: 'Git',
                        1: 'OOP / MVC',
                        2: 'Team work'
                    }
                }
            ]
        ]
    }
});

let exp = new Vue({
    el: '#experiences',
    data: {
        title: myTranslate({
            en: 'Experiences',
            vi: 'Kinh Nghiệm Làm Việc'
        }),
        items: [
            {
                company: 'Smart OSC',
                dev: 'Junior PHP Developer',
                time: {
                    from: '11-2017',
                    to: 'Now'
                },
                detail: [
                    {
                        title: myTranslate({
                            en: 'Project',
                            vi: 'Dự Án'
                        }),
                        value: 'Urbanfox Store'
                    },
                    {
                        title: myTranslate({
                            en: 'Project Description',
                            vi: 'Mô Tả'
                        }),
                        value: myTranslate({
                            en: 'A "Market Place" website for some markets in Southeast Asia',
                            vi: 'Một website thương mại điện tử theo kiểu "Market Place" cho một số thị trường ở Đông Nam Á'
                        })
                    },
                    {
                        title: myTranslate({
                            en: 'Technologies',
                            vi: 'Công Nghệ'
                        }),
                        value: 'Magento 2.2'
                    },
                    {
                        title: myTranslate({
                            en: 'Team Size',
                            vi: 'Số Lượng Thành Viên'
                        }),
                        value: '12'
                    },
                    {
                        title: myTranslate({
                            en: 'Responsiblities',
                            vi: 'Nhiệm Vụ'
                        }),
                        value: myTranslate({
                            en: 'Develop and fix the application’s defect base on requirement.',
                            vi: 'Xây dựng các chức năng, giao diện và sửa lỗi dựa trên yêu cầu.'
                        })
                    },
                    {
                        title: myTranslate({
                            en: 'Accomplishments',
                            vi: 'Học Hỏi'
                        }),
                        value: myTranslate({
                            en: 'Get more knowledge about e-commerce websites. Access to some api: lazada, shopee.',
                            vi: 'Biết thêm kiến thức về trang web thương mại điện tử. tiếp cận với một số api: lazada, shopee.'
                        })
                    },
                ]
            }
        ],
    }
});

let edu = new Vue({
    el: '#education',
    data: {
        title: myTranslate({
            en: 'Education',
            vi: 'Trình Độ Học Vấn'
        }),
        items: [
            {
                schoolName: myTranslate({
                    en: 'Posts and Telecommunications<br />Institute of Technology',
                    vi: 'Học Viện Công Nghệ<br /> Bưu Chính Viễn Thông'
                }),
                schoolArc: 'PTIT',
                time: {
                    from: '2014',
                    to: '2017'
                },
                major: {
                    general: myTranslate({
                        en: 'Information Technology',
                        vi: 'Công Nghệ Thông Tin'
                    }),
                    main: myTranslate({
                        en: 'Software Engineering',
                        vi: 'Công Nghệ Phần Mềm'
                    })
                }
            }
        ]
    }
});

let toggleBar = new Vue({
    el: '#menu-left',
    data: {
        items: [
            {
                text: myTranslate({
                    en: 'Home',
                    vi: 'Đầu Trang'
                }),
                link: '#banner',
                iconClass: 'fa fa-home'
            },
            {
                text: about.title,
                link: '#about',
                iconClass: 'fa fa-user'
            },
            {
                text: skill.title,
                link: '#skills',
                iconClass: 'fa fa-code'
            },
            {
                text: exp.title,
                link: '#experiences',
                iconClass: 'fa fa-database'
            },
            {
                text: edu.title,
                link: '#education',
                iconClass: 'fa fa-graduation-cap'
            }
        ]
    }
});

function myTranslate(text) {
    if (typeof text === 'string') {
        return text;
    }

    if (text[lang]) {
        return text[lang];
    }

    return '';
}