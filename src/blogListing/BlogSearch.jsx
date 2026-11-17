
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";

function BlogSearch({ search, setSearch, handleSearch }) {
  return (
    <InputGroup>
      <Form.Control
        type="text"
        placeholder="Search Blogs..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <Button
        variant="dark"
        onClick={handleSearch}
      >
        Search
      </Button>

      <Button
        variant="secondary"
        onClick={() => {
          setSearch("");
          handleSearch("");
        }}
        disabled={!search}
      >
        Clear
      </Button>
    </InputGroup>
  );
}

export default BlogSearch;
