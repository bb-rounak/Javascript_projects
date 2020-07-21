var addInput = document.getElementById('add-input');
var btn = document.getElementById('add-btn');
var ul = document.querySelector('ul');

btn.addEventListener('click',(e)=>{
	e.preventDefault();
		if(addInput.value !== ''){
		var li = document.createElement('li');
		var firstPara = document.createElement('p'),
			secondPara = document.createElement('p'),
			firstIcon = document.createElement('i'),
			secondIcon = document.createElement('i');
			input = document.createElement('input');

		firstIcon.className = "fa fa-pencil-square-o";
		secondIcon.className = "fa fa-times";
		input.className = 'edit-note';
		input.setAttribute('type','text');

		firstPara.textContent = addInput.value;

		secondPara.appendChild(firstIcon);
		secondPara.appendChild(secondIcon);

		li.appendChild(firstPara);
		li.appendChild(secondPara);
		li.appendChild(input);
		ul.appendChild(li);
		addInput.value = '';
	}
})

// Edit and Delete Items......................

ul.addEventListener('click',(e)=>{
	if(e.target.classList[1] === 'fa-pencil-square-o'){
		var parentPar = e.target.parentNode;
		parentPar.style.display = 'none';

		var node = parentPar.previousElementSibling;
		var input = parentPar.nextElementSibling;

		input.style.display = 'block';
		input.value = node.textContent;

		input.addEventListener('keypress',(e)=>{
			if(e.keyCode === 13){
				if(input.value !== ''){
				node.textContent = input.value;
				parentPar.style.display = 'block';
				input.style.display = 'none';
			}else{
				var li = input.parentNode;
				li.parentNode.removeChild(li);
			}
			} 
		})
	} else if(e.target.classList[1] === 'fa-times'){
		var list = e.target.parentNode.parentNode;
		list.parentNode.removeChild(list);
	}
})

// Hide List Elements...............................

var hideItem = document.getElementById('hide');
hideItem.addEventListener('click',()=>{
	var label = document.querySelector('label');
	if(hideItem.checked){
		ul.style.display= 'none';
		label.textContent = 'Unhide Notes';
	}else{
		label.textContent = 'Hide Notes';
		ul.style.display = 'block';
	}
})


//Search Filter.....................................

var searchInput = document.querySelector('#search-note input');
searchInput.addEventListener('keyup',function(e){
	var searchChar = e.target.value.toUpperCase();
	var notes = ul.getElementsByTagName('li');

	Array.from(notes).forEach(function(notes){
		var parText = notes.firstElementChild.textContent;
		if(parText.toUpperCase().indexOf(searchChar)!== -1){
			notes.style.display = 'block';
		} else{
			notes.style.display = 'none';
		}
	});
})