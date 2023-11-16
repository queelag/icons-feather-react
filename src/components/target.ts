import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherTargetElement } from '@aracna/icons-feather-web/elements/target-element'

export const IconFeatherTarget: ElementComponent<IconFeatherTargetElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherTargetElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-target', IconFeatherTargetElement)
