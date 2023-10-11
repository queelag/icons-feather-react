import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherUnlockElement } from '@aracna/icons-feather-web/elements/unlock-element'

export const IconFeatherUnlock: ElementComponent<IconFeatherUnlockElement, IconProps> = createBaseElementComponent<
  IconFeatherUnlockElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-unlock', IconFeatherUnlockElement)
