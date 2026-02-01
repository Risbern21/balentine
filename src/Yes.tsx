function Yes() {
  return (
    <div className="bg-pink-50 h-screen w-screen p-5 flex justify-center items-center">
      <div className="bg-purple-400 h-[90%] w-[95%] rounded-2xl shadow-2xl p-10 flex justify-baseline items-center">
        <div>
          <img src="rigby.jpeg" alt="freaky aah cat" width={300} height={300} />
          <p>You Will Receive a message from us shortly......Please wait</p>
        </div>
        <div className="flex justify-center items-center">
          <p>
            We humly request to not close this page unitl you've got a reply
            back from us
          </p>
          <img src="catgun.jpeg" alt="cat  w gun" width={200} height={200} />
        </div>
      </div>
    </div>
  );
}

export default Yes;
