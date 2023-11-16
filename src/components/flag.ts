import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherFlagElement } from '@aracna/icons-feather-web/elements/flag-element'

export const IconFeatherFlag: ElementComponent<IconFeatherFlagElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherFlagElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-flag', IconFeatherFlagElement)
