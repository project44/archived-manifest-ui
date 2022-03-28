import * as React from 'react';
import { ComponentProps } from '@manifest-ui/styled';
import { DropdownMenuContent as RadixDropdownMenuContent } from '@radix-ui/react-dropdown-menu';
import { StyledDropdownMenu } from './Dropdown.styles';
import { useDropdownContext } from './context';

export type DropdownMenuProps = ComponentProps<typeof StyledDropdownMenu>;

export const DropdownMenu = React.forwardRef<HTMLDivElement, DropdownMenuProps>(
  (props: DropdownMenuProps, ref) => {
    const { align, offset, placement, onOutsideClick, onEscapeKeyDown } = useDropdownContext();

    return (
      <RadixDropdownMenuContent
        asChild
        align={align}
        alignOffset={offset?.[0]}
        side={placement}
        sideOffset={offset?.[1]}
        onInteractOutside={onOutsideClick}
        onEscapeKeyDown={onEscapeKeyDown}
      >
        <StyledDropdownMenu className="manifestui-dropdown" ref={ref} {...props} />
      </RadixDropdownMenuContent>
    );
  },
);

DropdownMenu.displayName = 'DropdownMenu';
