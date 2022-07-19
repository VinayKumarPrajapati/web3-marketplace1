import React from "react";
import CheverDown from "../../assets/svg/chevronDown";
import Info from "../../assets/svg/info";

const styles = {
	textIcon: "flex items-center",
};

const CmcTableHeader = () => {
	return (
		<tbody>
			<tr>
				<th></th>
				<th className="flex items-center">
					<b># nbsp;</b>
					<CheverDown />
				</th>
				<th>Name</th>
				<th>Price </th>
				<th>24h %change</th>
				<th>7d %change</th>
				<th>
					<div className={styles.textIcon}>
						<p>Market Cap</p>
					</div>
				</th>
				<th>
					<div className={styles.textIcon}>
						<p>Vol</p>
					</div>
				</th>
				<th>
					<div className={styles.textIcon}>
						<p>Circulating Supply</p>
					</div>
				</th>
				<th>Last 7 Days</th>
			</tr>
		</tbody>
	);
};

export default CmcTableHeader;
