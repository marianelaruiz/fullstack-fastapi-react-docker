FROM python:3.9

# set the working directory in the container
WORKDIR /api

# copy the dependencies file to the working directory
COPY ./requirements.txt /api/requirements.txt

# install dependencies
RUN pip install --no-cache-dir --upgrade -r /api/requirements.txt

# copy the content of the local src directory to the working directory
COPY . /api

# command to run on container start
CMD [ "uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]