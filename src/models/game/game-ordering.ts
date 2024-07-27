type AscGameOrdering = 'added' | 'created' | 'metacritic' | 'name' | 'rating' | 'released' | 'updated';
type DescGameOrdering = `-${AscGameOrdering}`;

export type GameOrdering = AscGameOrdering | DescGameOrdering;
