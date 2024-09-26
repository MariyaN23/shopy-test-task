import {Box, Center, Checkbox, Progress, Text} from '@mantine/core';

function PasswordRequirement({ meets, label }: { meets: boolean; label: string }) {
    return (
        <Text component="div" c={'gray'} mt={5} size="sm">
            <Center inline>
                {meets
                    ? <Checkbox checked={true} readOnly variant="outline" radius="xl" size="xs"/>
                    : <Checkbox checked={false} readOnly variant="outline" radius="xl" size="xs"/>
                }
                <Box ml={7}>{label}</Box>
            </Center>
        </Text>
    );
}

const requirements = [
    { re: /[0-9]/, label: 'Must contain at least 1 number' },
    { re: /^(?=.*[a-z])(?=.*[A-Z]).+$/, label: 'Must contain lowercase and capital letters' },
];

function getStrength(password: string) {
    let multiplier = password.length > 7 ? 0 : 1;

    requirements.forEach((requirement) => {
        if (!requirement.re.test(password)) {
            multiplier += 1;
        }
    });

    return Math.max(100 - (100 / (requirements.length + 1)) * multiplier, 0);
}
type Props = {
    password: string;
}
export function PasswordStrength({password}: Props) {
    const strength = getStrength(password);
    const checks = requirements.map((requirement, index) => (
        <PasswordRequirement key={index} label={requirement.label} meets={requirement.re.test(password)} />
    ));
    const bars = Array(4)
        .fill(0)
        .map((_, index) => (
            <Progress
                styles={{ section: { transitionDuration: '0ms' } }}
                value={
                    password.length > 0 && index === 0 ? 100 : strength >= ((index + 1) / 4) * 100 ? 100 : 0
                }
                color={strength > 80 ? 'teal' : strength > 50 ? 'yellow' : 'red'}
                key={index}
                size={4}
            />
        ));
    return (
        <div>
            {/*<Group gap={5} grow mt="xs" mb="md">
                {bars}
            </Group>*/}
            <PasswordRequirement label="Must be at least 8 characters" meets={password.length > 7} />
            {checks}
        </div>
    );
}