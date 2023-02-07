# CHEATCODES FOR AWESOMENESS

## tsrnfs + tab

... paste an example result here

## tsrnfe + tab

... paste an example result here

## namefunction

function ArticleTitle() {
return <Text>React Native Design Patterns</Text>;
}

## or

const ArticleTitle = () => {
return <Text>React Native Design Patterns</Text>;
}

## addProps

function ArticleTitle(props) {
r0eturn <Text>{props.title} for React Native</Text>;
}

## Keys

function StarshipList({allStarships}) {
return (
<Fragment>
{allStarships.map((item) => {
return <Text key={item.id}>{item.name}</Text>;
})}
</Fragment>
);
}

// Usage
const allStarships = [
{ id: 'qwer', name: 'Death Star' },
{ id: 'erfg', name: 'X Wing' },
{ id: 'gkps', name: 'Millennium Falcon' }
];

<StarshipList allStarships={allStarships}>

## v⇥ var statement

var ${0}

## co⇥ const statement

const ${0}

## if⇥ if statement

if (${1:condition}) {
${0}
}
