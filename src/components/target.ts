import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherTargetElement } from '@aracna/icons-feather-web/elements/target-element.js'

export const IconFeatherTarget: ElementComponent<IconFeatherTargetElement, IconProps> = createBaseElementComponent<
  IconFeatherTargetElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-target', IconFeatherTargetElement)
