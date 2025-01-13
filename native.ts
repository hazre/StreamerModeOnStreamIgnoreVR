
import process from 'node:process';

// https://stackoverflow.com/questions/38033127/node-js-how-to-check-a-process-is-running-by-the-process-name/58844917#58844917
async function isProcessRunning(processName: string): Promise<boolean> {
    const cmd = (() => {
        switch (process.platform) {
            case 'win32': return `tasklist`;
            case 'darwin': return `pgrep -l ${processName} | awk '{ print $2 }'`;
            case 'linux': return `pgrep -l ${processName} | awk '{ print $2 }'`;
            default: return false;
        }
    })();

    if (!cmd) {
        return false;
    }

    return new Promise((resolve, reject) => {
        require('child_process').exec(cmd, (err: Error | null, stdout: string, stderr: string) => {
            if (err) reject(err);

            resolve(stdout.toLowerCase().indexOf(processName.toLowerCase()) > -1);
        });
    });
}

export async function isProcessesRunning(_, processes: string): Promise<boolean> {
    const processesToCheck = processes.split(',').map(p => p.trim());

    // Use Promise.all to check all processes and then use some to determine if any are running
    const processStatuses = await Promise.all(
        processesToCheck.map(async process => await isProcessRunning(process))
    );

    return processStatuses.some(status => status === true);
}
export async function isProcessesRunningText(_, processes: string): Promise<Record<string, boolean>> {
    const processesToCheck = processes.split(',').map(p => p.trim());
    const processStatus: Record<string, boolean> = {};

    for (const process of processesToCheck) {
        processStatus[process] = await isProcessRunning(process);
    }

    return processStatus;
}
