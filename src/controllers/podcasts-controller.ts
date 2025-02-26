import { IncomingMessage, ServerResponse } from "http";
import { serviceListEpisodes } from '../services/list-episodes-service'
import { serviceFilterEpisodes } from "../services/filter-episodes-services";
import { StatusCode } from "../utils/status-code";

export const getListEpisodes = async (
  req: IncomingMessage,
  res: ServerResponse
) => {

const content = await serviceListEpisodes();

  res.writeHead(StatusCode.OK, { "contents-type": "application/json" });
  res.end(JSON.stringify(content));
};

export const getFilterEpisodes = async (
  req: IncomingMessage,
  res: ServerResponse
) => {

  const content = await serviceFilterEpisodes(req.url);

  res.writeHead(200, { "contents-type": "application/json" });
  res.end(JSON.stringify(content));
};
