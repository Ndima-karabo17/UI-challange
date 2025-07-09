document.addEventListener('DOMContentLoaded', function () {
  const feature = document.getElementById('feature');
  const featureList = document.getElementById('feature-lists');

  const company = document.getElementById('comp');
  const companyList = document.querySelector('.company');

  feature.addEventListener('click', function (e) {
    e.stopPropagation();
    const isVisible = featureList.style.display === 'block';

    closeAllDropdowns();
    if (!isVisible) {
      featureList.style.display = 'block';
    }
  });


  company.addEventListener('click', function (e) {
    e.stopPropagation();
    const isVisible = companyList.style.display === 'block';

    closeAllDropdowns();
    if (!isVisible) {
      companyList.style.display = 'block';
    }
  });


  featureList.addEventListener('click', function (e) {
    e.stopPropagation();
  });

  companyList.addEventListener('click', function (e) {
    e.stopPropagation();
  });


  document.addEventListener('click', function () {
    closeAllDropdowns();
  });

  function closeAllDropdowns() {
    featureList.style.display = 'none';
    companyList.style.display = 'none';
  }
});
